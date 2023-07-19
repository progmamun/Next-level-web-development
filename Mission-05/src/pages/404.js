import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();

  setTimeout(() => {
    // router.push("/");
    router.back();
  }, [5000]);
  return (
    <div>
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg"
        alt=""
        width="100%"
      />
    </div>
  );
}

export default ErrorPage;
