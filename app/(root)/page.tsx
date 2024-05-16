import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Kavindu",
    lastName: "Jayakody",
    email: "kavindu@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          {/* current balance and bank status  */}
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1236.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      {/* right side */}
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 5000 }]}
      />
    </section>
  );
};

export default Home;
