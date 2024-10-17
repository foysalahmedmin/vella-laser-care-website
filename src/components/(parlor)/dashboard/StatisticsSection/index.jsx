import EarningByServices from "./EarningByServices";

const StatisticsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="">
          {/*<AccountReached />*/}
          <EarningByServices />
          {/*<YearlyIncome />*/}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
