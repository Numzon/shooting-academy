import {
  OfferCardIcon,
  OfferCardText,
  OfferCardTitle,
  OfferCard,
} from '../../../../components/OfferCard';
import { Row, Column } from '../../../../components/Grid';

export const HomeOfferCards = () => {
  return (
    <Row>
      <Column size="3">
        <OfferCard>
          <OfferCardIcon icon="icon-basic-world" type="tertiary" />
          <OfferCardTitle>Lorem ipsum sit</OfferCardTitle>
          <OfferCardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam ex illum laboriosam
            corrupti ab dolorum inventore consequatur. Minus deleniti minima quos eaque quaerat ipsa
            asperiores ad error placeat nostrum eaque quaerat ipsa asperiores.
          </OfferCardText>
        </OfferCard>
      </Column>
      <Column size="3">
        <OfferCard>
          <OfferCardIcon icon="icon-basic-settings" type="tertiary" />
          <OfferCardTitle>Lorem ipsum dolor sit sit sit</OfferCardTitle>
          <OfferCardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam ex illum laboriosam
            corrupti ab dolorum inventore consequatur. Minus deleniti minima quos eaque quaerat ipsa
            asperiores ad error placeat nostrum nostrum.
          </OfferCardText>
        </OfferCard>
      </Column>
      <Column size="3">
        <OfferCard>
          <OfferCardIcon icon="icon-basic-laptop" type="primary" />
          <OfferCardTitle>Lorem ipsum dolo</OfferCardTitle>
          <OfferCardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam ex illum laboriosam
            corrupti ab dolorum inventore consequatur. Minus deleniti minima quos eaque quaerat ipsa
            asperiores ad error placeat nostrum error placeat nostrum.
          </OfferCardText>
        </OfferCard>
      </Column>
      <Column size="3">
        <OfferCard>
          <OfferCardIcon icon="icon-basic-sheet-txt" type="primary" />
          <OfferCardTitle>Lorem ipsum dolor sit dolor sit</OfferCardTitle>
          <OfferCardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam ex illum laboriosam
            corrupti ab dolorum inventore consequatur.Minus deleniti minima quos eaque quaerat ipsa
            asperiores ad error placeat nostrum nostrum.
          </OfferCardText>
        </OfferCard>
      </Column>
    </Row>
  );
};

export default HomeOfferCards;
