import { YearsChart } from "./YearsChart";

export function YearsPageView() {
  return (
    <div className="p-4">
      <div className="flex">
        <h1 className="text-3xl">The Chart</h1>
        <div className="ml-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="year"
          />
        </div>
        <div className="ml-4">
          <button className="bg-blue-400 hover:bg-blue-600 rounded py-2 px-4">
            Calculate
          </button>
        </div>
      </div>
      <YearsChart numOfYears={5} />;
    </div>
  );
}
