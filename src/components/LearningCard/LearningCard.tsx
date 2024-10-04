import { CardImageWrapper, CardWrapper, CardBox } from "./styled";

import Typography from "../Typography";

function CardImage(props: any) {
  return <CardImageWrapper src={props.image} alt="jairsFace" />;
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
      <CardBox>{title}</CardBox>

      <CardImage image={image} />
      <CardBox className="calender">{date}</CardBox>

      <Typography className={"text_title"} font="SansSerif" component="h2">
        {descriptionTitle}
      </Typography>
      <Typography className={"text_description"} component="p" font="SansSerif">
        {description}
      </Typography>
    </CardWrapper>
  );
}

export default LearningCard;
