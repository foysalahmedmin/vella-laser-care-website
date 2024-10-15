import AccountReached from "./AccountReached";
import EarningByServices from "./EarningByServices";
import YearlyIncome from "./YearlyIncome";

const StatisticsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AccountReached />
          <EarningByServices />
          <YearlyIncome />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
