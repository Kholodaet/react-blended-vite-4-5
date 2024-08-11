import { Wave } from 'react-animated-text';
import { useEffect } from 'react';
import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
  selectRates,
} from 'reduxState/selectors';
import { fetchRates } from 'reduxState/operations';

const Rates = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const filteredRates = useSelector(selectFilteredRates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter />}
        {filteredRates.length > 0 ? (
          <RatesList rates={filteredRates} />
        ) : (
          <Heading error title=" We cannot find this currency 😱" />
        )}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Rates;
