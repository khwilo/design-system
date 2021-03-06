import Button from '../../components/Button';
import SectionContainer from './SectionContainer';
import SectionWrapper from './SectionWrapper';
import SectionContent from './SectionContent';

const SectionButton = () => (
  <SectionContent contentTitle='Buttons'>
    <SectionWrapper>
      <SectionContainer heading={'<Button />'}>
        <Button title='Default' />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'} faintHeading>
        <Button title='Default' defaultHoverFocus />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button variant="outline" />'}>
        <Button title='Default' color='primary' variant='outline' />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'} faintHeading>
        <Button
          title='Default'
          color='primary'
          variant='outline'
          primaryOutlineHoverFocus
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button variant="text" />'}>
        <Button title='Default' color='primary' variant='text' />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'} faintHeading>
        <Button
          title='Default'
          color='primary'
          variant='text'
          primaryTextHoverFocus
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button disableShadow />'}>
        <Button title='Default' color='primary' disabledShadow />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button disabled />'}>
        <Button title='Default' disabled />
      </SectionContainer>
      <SectionContainer heading={'<Button variant="text" disabled />'}>
        <Button title='Default' variant='text' disabled />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button startIcon="local_grocery_store" />'}>
        <Button
          title='Default'
          color='primary'
          startIcon='local_grocery_store'
        />
      </SectionContainer>
      <SectionContainer heading={'<Button endIcon="local_grocery_store" />'}>
        <Button title='Default' color='primary' endIcon='local_grocery_store' />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button size="sm" />'}>
        <Button title='Default' color='primary' size='sm' />
      </SectionContainer>
      <SectionContainer heading={'<Button size="md" />'}>
        <Button title='Default' color='primary' size='md' />
      </SectionContainer>
      <SectionContainer heading={'<Button size="lg" />'}>
        <Button title='Default' color='primary' size='lg' />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button color="default" />'}>
        <Button title='Default' />
      </SectionContainer>
      <SectionContainer heading={'<Button color="primary" />'}>
        <Button title='Default' color='primary' />
      </SectionContainer>
      <SectionContainer heading={'<Button color="secondary" />'}>
        <Button title='Default' color='secondary' />
      </SectionContainer>
      <SectionContainer heading={'<Button color="danger" />'}>
        <Button title='Default' color='danger' />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'&:hover, &:focus '} faintHeading>
        <Button title='Default' defaultHoverFocus />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '} faintHeading>
        <Button title='Default' color='primary' primaryHoverFocus />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '} faintHeading>
        <Button title='Default' color='secondary' secondaryHoverFocus />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '} faintHeading>
        <Button title='Default' color='danger' dangerHoverFocus />
      </SectionContainer>
    </SectionWrapper>
  </SectionContent>
);

export default SectionButton;
