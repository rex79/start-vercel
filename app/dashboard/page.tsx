import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Employee } from '../ui/dashboard/employee';
import { fetchEmployee } from '../lib/data';

export default async function Page() {
    const employee = await fetchEmployee()
    console.log(employee);
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                    {employee.map((single_emp) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex p-4">
                            <h3 className="ml-2 text-sm font-medium">{single_emp.name}</h3>
                            <h3 className="ml-2 text-sm font-medium">{single_emp.scheduler}</h3>
                            <h3 className="ml-2 text-sm font-medium">{single_emp.controller}</h3>
                        </div>
                    ))}
                </div>
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
                {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
                {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
                {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <RevenueChart revenue={revenue}  /> */}
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </div>
        </main>
    );

}