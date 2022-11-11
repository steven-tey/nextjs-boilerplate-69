import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>{slug}</div>;
}
