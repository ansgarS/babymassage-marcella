import { useState, FormEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { useReCaptcha } from "next-recaptcha-v3";

export function CourseBookingModal(props: {
  showCourseBookingModal: boolean;
  closeModal: VoidFunction;
}) {
  const [step, setStep] = useState<"Initial" | "Loading" | "Error">("Initial");
  const [email, setEmail] = useState("");
  const [nameParent, setNameParent] = useState("");
  const [nameChild, setNameChild] = useState("");
  const [ageChild, setAgeChild] = useState("");
  const [courseName, setCourseName] = useState("");
  const [comment, setComment] = useState("");

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    setStep("Loading");
    try {
      const token = await executeRecaptcha("form_submit");
      const response = await fetch(
        process.env.BACKEND_API ?? "Unknown API route",
        {
          method: "POST",
          headers: {
            "X-reCAPTCHA-Token": token,
          },
          body: JSON.stringify({
            email,
            nameParent,
            nameChild,
            ageChild,
            courseName,
            comment,
          }),
        }
      );

      if (response.ok) {
        setStep("Initial");
        props.closeModal();
        return;
      }
    } catch (e) {
      console.log("Ran into error", e);
      setStep("Error");
    }

    setStep("Error");
  };

  const getModalBody = () => {
    if (step === "Loading") {
      return (
        <div className="relative p-4 md:p-5 flex justify-center items-center h-28">
          <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">
            Die Kursanfrage wird gerade versendet. Sobald der Vorgang
            abegschlossen ist, schließt sich das Popup. Dann musst du nur noch
            warten, bis ich deine Anfrage gelesen habe :)
          </p>
          <div
            role="status"
            className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Anfrage wird gesendet...</span>
          </div>
        </div>
      );
    }
    if (step === "Error") {
      return (
        <div className="p-4 md:p-5">
          <p>
            Leider ist etwas bei der Anfrage schiefgelaufen. Willst du es noch
            einmal versuchen?
          </p>

          <div className="w-full flex justify-center mt-8">
            <button
              onClick={() => setStep("Initial")}
              className="w-[180px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 md:p-5">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-2">
            <div className="md:w-[49%] w-full flex flex-col gap-1">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="z.B. name@company.com"
                  required
                  onChange={(evt) => setEmail(evt.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor="fullNameParent"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name des Erziehungsberechtigten
                </label>
                <input
                  type="text"
                  name="fullNameParent"
                  id="fullNameParent"
                  placeholder="z.B. Jolie Musterfrau"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(evt) => setNameParent(evt.target.value)}
                  value={nameParent}
                />
              </div>
            </div>

            <div className="md:w-[49%] w-full flex flex-col gap-1">
              <div>
                <label
                  htmlFor="fullNameChild"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name des Kindes
                </label>
                <input
                  type="text"
                  name="fullNameChild"
                  id="fullNameChild"
                  placeholder="z.B. Jolie Musterkind"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(evt) => setNameChild(evt.target.value)}
                  value={nameChild}
                />
              </div>
              <div>
                <label
                  htmlFor="ageChild"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Alter des Kindes
                </label>
                <input
                  type="text"
                  name="ageChild"
                  id="ageChild"
                  placeholder="z.B. 6 Monate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(evt) => setAgeChild(evt.target.value)}
                  value={ageChild}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="courseSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kursname
            </label>
            <input
              type="text"
              name="courseSelect"
              id="courseSelect"
              placeholder="z.B. Babymassage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(evt) => setCourseName(evt.target.value)}
              value={courseName}
            />
          </div>
          <div>
            <label
              htmlFor="comments"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zusätzliche Anmerkungen
            </label>
            <textarea
              name="comments"
              id="comments"
              placeholder="z.B. Ich interessiere mich für den Kurs im August diesen Jahres"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(evt) => setComment(evt.target.value)}
              value={comment}
            />
          </div>
          <div className="flex gap-1 md:pl-20">
            <button
              type="reset"
              className="w-[180px] text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => props.closeModal()}
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Anfrage absenden
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={twMerge(
        "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
        !props.showCourseBookingModal ? "hidden" : "block"
      )}
    >
      <div className="relative p-4 w-full max-w-md md:max-w-xl max-h-full mx-auto md:mt-20 overflow-y-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Kursanfrage
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => props.closeModal()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Anfrage schließen</span>
            </button>
          </div>
          {/* Modal body */}
          {getModalBody()}
        </div>
      </div>
    </div>
  );
}
