import CardComponent, { CardBodyComponent } from "@/components/shared/Card";
import TypographyComponent from "@/components/shared/Typography";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <CardComponent color="transparent" shadow={false}>
      <CardBodyComponent className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
          <Icon className="h-6 w-6" />
        </div>
        <TypographyComponent variant="h5" color="blue-gray" className="mb-2">
          {title}
        </TypographyComponent>
        <TypographyComponent className=" font-normal !text-gray-500">
          {children}
        </TypographyComponent>
      </CardBodyComponent>
    </CardComponent>
  );
}

export default FeatureCard;
