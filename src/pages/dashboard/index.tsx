import '../../styles/dashboard/dashboard.scss';
import { Bar, ChartProps, Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import Tabs from '../../components/ui/Tabs';
import { useState } from 'react';
import TabPanel from '../../components/ui/TabPanel';

interface DashboardAssets {
    icons: string;
    total: number;
    title: string;
}

interface DashboardQuickActions {
    Title: string;
}

interface DashboardVesselTable {
    name: string;
    users: number;
    type: string;
    status: string;
}

interface ChartOptions {
    responsive: boolean;
    maintainAspectRatio: boolean;
    scales: {
        y: {
            beginAtZero: boolean;
            max: number;
        };
    };
    plugins: {
        legend: {
            display: boolean;
        };
    };
}

interface PerfomingVessels {
    name: string;
    type: string;
    completion: number;
}

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("overall")
    const [activeKarcoTab, setActiveKarcoTab] = useState("videos")
    const dashboardAssets: DashboardAssets[] = [
        { icons: '/images/vessels.svg', total: 50, title: 'Total Vessels' },
        { icons: '/images/tc.svg', total: 12, title: 'Total TC' },
        { icons: '/images/users.svg', total: 3556, title: 'Total Users' },
        { icons: '/images/assigned-token.svg', total: 10000, title: 'Assigned Tokens' },
        { icons: '/images/remaining-token.svg', total: 7644, title: 'Remaining Tokens' },
    ]

    const dashboardQuickActions: DashboardQuickActions[] = [
        { Title: 'Assign Content' },
        { Title: 'Add Ranks' },
        { Title: 'Assign Tokens' },
        { Title: 'Compare Data' },
    ]

    const dashboardVesselTable: DashboardVesselTable[] = [
        { name: 'Vessel 1', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 2', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 3', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 4', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 5', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 6', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 7', users: 1332, type: 'Chemical Tanker', status: 'Online' },
        { name: 'Vessel 8', users: 1332, type: 'Chemical Tanker', status: 'Online' },
    ]

    const contentCompletionData = [
        { name: "KARCO Content", completion: 30 },
        { name: "Company Content", completion: 30 },
        { name: "Third Party Content", completion: 30 },
        { name: "Campaign", completion: 30 },
    ]

    const topPerfomingVessels: PerfomingVessels[] = [
        { name: "Vessel 1", type: "Container", completion: 90 },
        { name: "Vessel 2", type: "Chemical Tanker", completion: 85 },
        { name: "Vessel 3", type: "Chemical Tanker", completion: 80 },
    ]

    const bottomPerfomingVessels: PerfomingVessels[] = [
        { name: "Vessel 1", type: "Container", completion: 90 },
        { name: "Vessel 2", type: "Chemical Tanker", completion: 85 },
        { name: "Vessel 3", type: "Chemical Tanker", completion: 80 },
    ]

    const karcoLibraryData = [
        { code: "12001", courseName: "Recovery of person from water", videoType: "AR Content" },
        { code: "12001", courseName: "Recovery of person from water", videoType: "AR Content" },
        { code: "12001", courseName: "Recovery of person from water", videoType: "AR Content" },
        { code: "12001", courseName: "Recovery of person from water", videoType: "AR Content" },
        { code: "12001", courseName: "Recovery of person from water", videoType: "AR Content" },
    ]

    const assignedTokenRequestDetails = [
        {id: 1, text: 'Requested 50 tokens from Mr. Mahesh Sathye, UID 120045 | 11.45Am', isAssign: true},
        {id: 2, text: 'Requested 50 tokens from Mr. Purvesh Sadhu, UID 120045 | 10.55Am', isAssign: true},
        {id: 3, text: 'Requested for 100 tokens sent - CTR1213 | 10.34Am', isAssign: false},
        {id: 4, text: 'Requested for 150 tokens sent - CTR1213 | 09.56Am', isAssign: false},
        {id: 5, text: 'Recall 100 Tokens form Jay Mehta - CTR1177 | 09.13 Am ', isAssign: false},
    ]

    // Chart data for entity completion
    const entityCompletionData = {
        labels: ["Vessel 1", "Vessel 2", "Vessel 3", "Vessel 4", "Vessel 5", "Vessel 6"],
        datasets: [
            {
                label: "Completion",
                data: [65, 45, 80, 90, 55, 70],
                backgroundColor: "#D9D9D9",
            },
        ],
    }

    const vesselPerfomancenData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun"],
        datasets: [
            {
                label: "Completion",
                data: [65, 45, 80, 90, 55, 70],
                backgroundColor: "#D9D9D9",
            },
        ],
    }

    // Chart options
    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div className="dashboard-container">
            <div className='dashboard-grid-one'>
                <div className="dashboard-assets">
                    <div className='asset'>
                        {
                            dashboardAssets.slice(0, 3).map((item, index) => (
                                <div key={index} className='text-center'>
                                    <img src={item.icons} alt={item.title} />
                                    <h6>{item.total}</h6>
                                    <span>{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className='asset'>
                        {
                            dashboardAssets.slice(3, 5).map((item, index) => (
                                <div key={index} className='text-center'>
                                    <img src={item.icons} alt={item.title} />
                                    <h6>{item.total}</h6>
                                    <span>{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="dashboard-actions">
                    <h6>Quick Actions</h6>
                    <div className='action-container'>
                        {
                            dashboardQuickActions.map((item, index) => (
                                <div key={index} className='action'>
                                    <div className="circle-img"></div>
                                    <p>{item.Title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="vessels-status">
                    <div className='vessel-title d-flex-space-between'>
                        <h6>Vessels Online Status</h6>
                        <span>Total Vessels: 50</span>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Vessel Name</th>
                                <th>Users</th>
                                <th>Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dashboardVesselTable.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.users}</td>
                                        <td>{item.type}</td>
                                        <td><span className="online-circle"></span> {item.status}</td>
                                    </tr>
                                ))
                            }
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='dashboard-grid-two'>
                <div className='dashboard-grid-two-mainContent'>
                    <Tabs
                        tabs={[
                            { id: "overall", label: "Overall" },
                            { id: "monthly", label: "Monthly" },
                        ]}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                    <TabPanel id="overall" activeTab={activeTab}>
                        <div className='overall-conatiner d-flex-wrap'>
                            <div className="completionSection">
                                <h5>Overall Completion %</h5>
                                <div className='circleChart'>
                                    <div className='circleChartInner'>
                                        <div className='circleChartCircle' style={{ "--percent": "73%" } as React.CSSProperties}>
                                            <div className='circleChartValue'>73%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='contentCompletion'>
                                <div className='contentCompletionChart d-flex-space-between'>
                                    <h5>Content Completion %</h5>
                                    <div className='dropdown'>
                                        <span>Entity: Vessels</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div className='contentCompletionChartInner'>
                                    {
                                        contentCompletionData.map((item, index) => (
                                            <div key={index} className='contentCompletionItem'>
                                                <span>{item.name}</span>
                                                <div className='progressBar'>
                                                    <div className='progressBarFill' style={{ width: `${item.completion}%` }}></div>
                                                </div>
                                                <span>{item.completion}%</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="overall-entity-container">
                            <div className='d-flex-space-between'>
                                <h5>Overall Entity Completion %</h5>
                                <div className='dropdown'>
                                    <span>Entity: Vessels</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className='dropdown'>
                                    <span>Content: All Content</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className='chart-container'>
                                <Bar data={entityCompletionData} options={chartOptions} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel id="monthly" activeTab={activeTab}>
                        <div className='overall-conatiner d-flex-wrap'>
                            <div className="completionSection">
                                <h5>Monthly Completion %</h5>
                                <div className='circleChart'>
                                    <div className='circleChartInner'>
                                        <div className='circleChartCircle' style={{ "--percent": "73%" } as React.CSSProperties}>
                                            <div className='circleChartValue'>73%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='contentCompletion'>
                                <div className='contentCompletionChart d-flex-space-between'>
                                    <h5>Content Completion %</h5>
                                    <div className='dropdown'>
                                        <span>Entity: Vessels</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div className='contentCompletionChartInner'>
                                    {
                                        contentCompletionData.map((item, index) => (
                                            <div key={index} className='contentCompletionItem'>
                                                <span>{item.name}</span>
                                                <div className='progressBar'>
                                                    <div className='progressBarFill' style={{ width: `${item.completion}%` }}></div>
                                                </div>
                                                <span>{item.completion}%</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="overall-entity-container">
                            <div className='d-flex-space-between'>
                                <h5>Monthly Entity Completion %</h5>
                                <div className='dropdown'>
                                    <span>Entity: Vessels</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className='dropdown'>
                                    <span>Content: All Content</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className='chart-container'>
                                <Bar data={entityCompletionData} options={chartOptions} />
                            </div>
                        </div>
                    </TabPanel>
                    <div className="perfoming-vessels-container">
                        <div className="top-vessels">
                            <h5>Top 3 Performing Vessels</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Vessel Name</th>
                                        <th>Type</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        topPerfomingVessels.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.completion}%</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="hr-line"></div>
                        <div className="bottom-vessels">
                            <h5>Bottom 3 Performing Vessels</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Vessel Name</th>
                                        <th>Type</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bottomPerfomingVessels.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.completion}%</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="vessels-chart-container">
                        <div className='d-flex-space-between'>
                            <h5>Vessel Performance</h5>
                            <div className='dropdown'>
                                <span>Year: 2024</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <div className='dropdown'>
                                <span>Vessel Name: Vessel 1</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className='chart-container'>
                            <Bar data={vesselPerfomancenData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-grid-three'>
                <div className="library">
                    <h5>KARCO Library</h5>
                    <Tabs
                        tabs={[
                            { id: "videos", label: "KARCO Videos" },
                            { id: "contents", label: "KARCO Contents" },
                        ]}
                        activeTab={activeKarcoTab}
                        onTabChange={setActiveKarcoTab}
                    />
                    <TabPanel id="videos" activeTab={activeKarcoTab}>
                        <table>
                            <thead>
                                <tr>
                                    <th><div> Code <img src='/images/chevron.svg' /></div></th>
                                    <th><div>Course name <img src='/images/chevron.svg' /></div></th>
                                    <th>Video Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    karcoLibraryData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.code}</td>
                                            <td><a href="">{item.courseName}</a></td>
                                            <td>{item.videoType}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </TabPanel>
                </div>
                <div className="assigned-token-container">
                    <h5>Tokens Assigned/ Recall/ Request Details</h5>
                    {
                        assignedTokenRequestDetails.map((item, index) => (
                            <div key={index} >
                                <span>{item.id}</span>
                                <p>{item.text}</p>
                                {
                                    item.isAssign && <button className='assign-button'>Assign</button>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
