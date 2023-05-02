/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
function App() {
  const [summarizedData, setSummarizedData] = useState(null);
  const [link, setLink] = useState(null);
  const [lenght, setLenght] = useState("Medium");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownItems = {
    "small": 0.075,
    "medium": 0.25,
    "large": 0.1,

  }

  const handleChange = (event) => {
    setLink(event.target.value)
  }

  const handleClick = () => {
    setIsLoading(true);
    setSummarizedData(null);
    fetch('https://jsonplaceholder.typicode.com/comments/1')
      .then(response => response.json())
      .then(json => {
        console.log(json.body)
        setSummarizedData(json?.body)
        setLenght("MEDIUM");
        setIsLoading(false)
      })
  }

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handlePrecision = (precision) => {
    setIsLoading(true)
    setLenght(precision);
    setIsOpen(!isOpen);
    setSummarizedData(null);
    fetch('https://jsonplaceholder.typicode.com/comments/5')
      .then(response => response.json())
      .then(json => {
        console.log(json.body)
        setSummarizedData(json?.body)
        setIsLoading(false)
      })
  }

  return (
    <div className="">
      <div className='flex justify-center w-full absolute bg-gray-100 min-h-screen'>
        <div className="xlmin:w-2/4 xlmax:w-3/4 rounded-lg text-4xl font-bold absolute mt-12 bg-white p-6 z-100">
          Youtube Transcript Summarizer
          <div className='mt-6'>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input className="px-2  text-gray-700 placeholder-gray-500 bg-white outline-none d focus:placeholder-transparent" type="text" name="youtube" placeholder="Paste youtube link" aria-label="paste youtube link"
                onChange={(event) => handleChange(event)}
              />

              <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                onClick={() => handleClick()}
              >Generate summary</button>
            </div>
          </div>

          {isLoading &&
            <div className='mt-4 mb-10'>
              <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
            </div>
          }

          {summarizedData &&
            <div className="mt-4">
              <div class="relative inline-block">
                <button onClick={() => handleDropdown()} class="relative z-10 flex items-center p-2 text-sm text-gray-100 uppercase tracking-wide border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring bg-gray-700 focus:outline-none">
                  <span class="mx-1">{lenght}</span>
                  <svg class="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                {isOpen &&
                  <div
                    class="absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                  >
                    {Object.keys(dropdownItems).map((item, index) => {
                      return (
                        <a key={index} onClick={() => { handlePrecision(item) }} href="#" class="block uppercase px-4 py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> {item} </a>
                      )
                    })}
                  </div>
                }
              </div>
              <div className='panda overflow-y-hidden min-h-0 mt-4 mb-2 text-2xl text-gray-600 text-justify z-2'>
                {summarizedData}
                {summarizedData}
                {summarizedData}
                {summarizedData}
                {summarizedData}
              </div>
            </div>
          }
        </div>
      </div>

      {/* <div class="writer">
            <div class="writer-text">Apana tike gandi marantu</div>
        </div> */}
    </div>
  );
}

export default App;
