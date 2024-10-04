import { CardImageWrapper, CardWrapper, CardBox } from "./styled";

import Typography from "../Typography";

function CardImage(props: any) {
  return <CardImageWrapper src={props.image} alt="jairsFace" />;
}

function CardNovo({ component, children }: any) {
  return (
    <CardBox>
      <Typography component={component}>{children}</Typography>
    </CardBox>
  );
}

function LearningCard({
  title,
  date,
  descriptionTitle,
  description,
  image,
}: any) {
  return (
    <CardWrapper>
      <CardNovo component="span">{title}</CardNovo>

      <CardImage image={image} />
      <CardNovo component="span">{date}</CardNovo>

      <Typography component="p">{descriptionTitle}</Typography>
      <Typography component="p" font="Poppins">
        {description}
      </Typography>
    </CardWrapper>
  );
}

export default LearningCard;
