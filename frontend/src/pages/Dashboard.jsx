import Sidebar from "../components/Sidebar";
import ATSChart from "../components/ATSChart";


function Dashboard() {

  return (

    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />


      <div className="flex-1">


        {/* Header */}

        <div className="flex justify-between items-center px-10 py-8 border-b border-slate-800">


          <div>

            <h1 className="text-4xl font-bold">
              👋 Welcome Back
            </h1>


            <p className="text-gray-400 mt-2">
              Here's your latest resume performance.
            </p>


          </div>



          <div className="flex items-center gap-4">


            <button className="bg-slate-800 px-4 py-3 rounded-xl">
              🔔
            </button>



            <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-xl">


              <img
                src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
                className="w-12 h-12 rounded-full"
              />


              <div>

                <p className="font-semibold">
                  User
                </p>

                <p className="text-gray-400 text-sm">
                  Resume Analyzer
                </p>

              </div>


            </div>


          </div>


        </div>



        {/* Dashboard Content */}


        <div className="p-10">



          {/* Statistics Cards */}

<div className="grid md:grid-cols-4 gap-6">


<div className="bg-slate-900 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">

<h3 className="text-gray-400">
📄 Total Uploads
</h3>

<h2 className="text-5xl font-bold mt-4 text-blue-400">
25
</h2>

<p className="text-sm text-gray-400 mt-3">
+5 this month
</p>

</div>



<div className="bg-slate-900 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">


<h3 className="text-gray-400">
📊 Total Reports
</h3>


<h2 className="text-5xl font-bold mt-4 text-green-400">
20
</h2>


<p className="text-sm text-gray-400 mt-3">
Generated successfully
</p>


</div>




<div className="bg-slate-900 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">


<h3 className="text-gray-400">
⭐ Average Score
</h3>


<h2 className="text-5xl font-bold mt-4 text-yellow-400">
82%
</h2>


<p className="text-sm text-gray-400 mt-3">
Across all resumes
</p>


</div>





<div className="bg-slate-900 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">


<h3 className="text-gray-400">
🏆 Highest Score
</h3>


<h2 className="text-5xl font-bold mt-4 text-purple-400">
95%
</h2>


<p className="text-sm text-gray-400 mt-3">
Best performance
</p>


</div>



</div>





          {/* ATS Chart */}


          <div className="bg-slate-900 rounded-2xl p-8 mt-10">


            <h2 className="text-2xl font-bold mb-6">
              📈 ATS Score Analytics
            </h2>


            <ATSChart />


          </div>







          {/* Profile */}


          <div className="bg-slate-900 rounded-2xl p-8 mt-10">


            <h2 className="text-2xl font-bold mb-6">
              👤 User Profile
            </h2>



            <div className="flex items-center gap-6">


              <img
                src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff&size=120"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />



              <div>


                <h3 className="text-2xl font-bold">
                  User
                </h3>


                <p className="text-gray-400">
                  Resume Analyzer User
                </p>



                <p className="mt-3">
                  📄 Total Uploads:
                  <span className="text-blue-400">
                    1
                  </span>
                </p>



                <p>
                  📊 Average Score:
                  <span className="text-green-400">
                    31%
                  </span>
                </p>



              </div>


            </div>


          </div>







          {/* Resume History */}



          <div className="bg-slate-900 rounded-2xl p-8 mt-10">


            <h2 className="text-2xl font-bold mb-6">
              📜 Recent Resume Reports
            </h2>



            <table className="w-full">


              <thead>

                <tr className="border-b border-slate-700">

                  <th className="text-left py-3">
                    Resume
                  </th>

                  <th className="text-left">
                    Date
                  </th>

                  <th className="text-left">
                    Score
                  </th>

                  <th className="text-left">
                    Status
                  </th>


                </tr>


              </thead>



              <tbody>


                <tr className="border-b border-slate-800">


                  <td className="py-4">
                    Sample_Resume.pdf
                  </td>


                  <td>
                    Today
                  </td>


                  <td className="text-green-400">
                    31%
                  </td>


                  <td>
                    Needs Improvement
                  </td>


                </tr>



              </tbody>


            </table>



          </div>







          {/* Latest Resume */}



          <div className="bg-slate-900 rounded-2xl p-8 mt-10">


            <h2 className="text-2xl font-bold">
              📄 Latest Resume
            </h2>



            <div className="mt-6 flex justify-between items-center">


              <div>


                <p className="text-xl font-semibold">
                  Sample_Resume.pdf
                </p>


                <p className="text-gray-400">
                  Uploaded Today
                </p>


              </div>

{/* Recent Activity */}

<div className="bg-slate-900 rounded-2xl p-8 mt-10">


<h2 className="text-2xl font-bold mb-6">
  🔥 Recent Activity
</h2>



<div className="space-y-5">



<div className="flex items-center gap-4">

<div className="bg-green-500 w-3 h-3 rounded-full"></div>

<div>

<p className="font-semibold">
Resume Uploaded
</p>

<p className="text-gray-400 text-sm">
Sample_Resume.pdf uploaded today
</p>

</div>

</div>




<div className="flex items-center gap-4">

<div className="bg-blue-500 w-3 h-3 rounded-full"></div>

<div>

<p className="font-semibold">
Analysis Completed
</p>

<p className="text-gray-400 text-sm">
AI resume analysis completed successfully
</p>

</div>

</div>




<div className="flex items-center gap-4">

<div className="bg-purple-500 w-3 h-3 rounded-full"></div>

<div>

<p className="font-semibold">
Report Downloaded
</p>

<p className="text-gray-400 text-sm">
PDF report downloaded
</p>

</div>

</div>



</div>


</div>

              <button className="bg-blue-600 px-6 py-3 rounded-xl">
                View Report
              </button>



            </div>


          </div>




        </div>



      </div>


    </div>

  );

}


export default Dashboard;