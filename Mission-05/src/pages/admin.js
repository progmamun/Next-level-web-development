import DashboardLayout from "@/components/Layouts/DashboardLayout";

function AdminHomePage() {
  return (
    <div>
      <h1>admin</h1>
    </div>
  );
}

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
