import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <nav>
        <ul>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}