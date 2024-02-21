import { lusitana } from '@/app/ui/fonts';

export default async function EmployeeWrapper() {
    return (
        <>
            {/* NOTE: comment in this code when you get to this point in the course */}

            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
        </>
    );
}

export function Employee(emp: any[]) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            { emp.map((single_emp) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex p-4">
                    <h3 className="ml-2 text-sm font-medium">{single_emp.name}</h3>
                    <h3 className="ml-2 text-sm font-medium">{single_emp.scheduler}</h3>
                    <h3 className="ml-2 text-sm font-medium">{single_emp.controller}</h3>
                </div>
            )) }
        </div>
    );
}
