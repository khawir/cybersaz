import Link from "next/link";
import type { Offering } from "@/content/types";
import { getOfferingHref } from "@/content/offerings";
import { Card, CardKicker, CardTitle, CardBody } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";

export function OfferingCard({ offering, index = 0 }: { offering: Offering; index?: number }) {
  return (
    <Reveal index={index}>
      <Link href={getOfferingHref(offering)} style={{ textDecoration: "none", color: "inherit" }}>
        <Card style={{ padding: 22 }}>
          <IconBox icon={offering.icon} />
          <CardKicker>{offering.category ?? offering.eyebrow}</CardKicker>
          <CardTitle>{offering.title}</CardTitle>
          <CardBody>{offering.intro}</CardBody>
        </Card>
      </Link>
    </Reveal>
  );
}
