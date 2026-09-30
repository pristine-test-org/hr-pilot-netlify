import { Link } from "react-router";
import "./impeccable-test-drive.css";

export function ImpeccableTestDrivePage() {
  return (
    <div className="td-page">
      <main className="td-main">
        <span className="td-badge">Leave season</span>
        <h1 className="td-heading">Plan your team&apos;s leave for the year</h1>
        <p className="td-muted">
          See how many days each person has left and when approvals are usually decided.
        </p>
        <div className="td-bar" aria-hidden />
        <p className="td-edge">
          HR Pilot refreshes leave balances every night, so the numbers you see after signing in
          are always from the previous day&apos;s close.
        </p>
        <p>
          <Link to="/login" className="td-link">
            Log in to check your balance
          </Link>
        </p>
      </main>
    </div>
  );
}
