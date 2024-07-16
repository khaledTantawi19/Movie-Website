// import React, { useState, useEffect } from "react";
// import "./schedule.css";
// import Card from "../Components/Card";

// function Schedule() {
//   const filterList = [
//     { _id: 1, name: "All", active: true },
//     { _id: 2, name: "Romance", active: false },
//     { _id: 3, name: "Action", active: false },
//     { _id: 4, name: "Thriller", active: false },
//     { _id: 5, name: "Horror", active: false },
//     { _id: 6, name: "Adventure", active: false },
//   ];
//   const [data, setData] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [filters, setFilters] = useState(filterList);

//   const fetchdata = () => {
//     fetch("http://localhost:3000/Data/movieData.json")
//       .then((res) => res.json())
//       .then((Data) => setData(Data))
//       .catch((e) => console.log(e.message));
//   };
//   useEffect(() => {
//     fetchdata();
//   }, []);

//   useEffect(() => {
//     setMovies(data);
//   }, [data]);

//   const handleFilterMovie = (category) => {
//     setFilters(
//       filters.map((filter) => {
//         filter.active = false;
//         if (filter.name === category) {
//           filter.active = true;
//         }
//         return filter;
//       })
//     );

//     if (category === "All") {
//       setMovies(data);
//       return;
//     }
//     setMovies(data.filter((movie) => movie.category === category));
//   };
//   return (
//     <section id="schedule" className="schedule">
//       <div className="container-fluid">
//         <div className="row">
//           <h4 className="section-title"> Opening this week</h4>
//         </div>
//         <div className="row">
//           <ul className="filters">
//             {filters.map((filter) => (
//               <li
//                 key={filter._id}
//                 className={`${filter.active ? "active" : undefined}`}
//                 onClick={() => {
//                   handleFilterMovie(filter.name);
//                 }}
//               >
//                 {filter.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="row mt-5">
//           {movies &&
//             movies.length > 0 &&
//             movies.map((movie) => <Card key={movie._id} movie={movie} />)}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Schedule;

// second code with calendar

// import React, { useState, useEffect } from "react";
// import "./schedule.css";
// import Card from "../Components/Card";
// import CalendarModal from "../Components/CalendarModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// function Schedule() {
//   const filterList = [
//     { _id: 1, name: "All", active: true },
//     { _id: 2, name: "Romance", active: false },
//     { _id: 3, name: "Action", active: false },
//     { _id: 4, name: "Thriller", active: false },
//     { _id: 5, name: "Horror", active: false },
//     { _id: 6, name: "Adventure", active: false },
//   ];
//   const [data, setData] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [filters, setFilters] = useState(filterList);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const fetchdata = () => {
//     fetch("http://localhost:3000/Data/movieData.json")
//       .then((res) => res.json())
//       .then((Data) => setData(Data))
//       .catch((e) => console.log(e.message));
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   useEffect(() => {
//     setMovies(data);
//   }, [data]);

//   const handleFilterMovie = (category) => {
//     setFilters(
//       filters.map((filter) => {
//         filter.active = false;
//         if (filter.name === category) {
//           filter.active = true;
//         }
//         return filter;
//       })
//     );

//     if (category === "All") {
//       setMovies(data);
//       return;
//     }
//     setMovies(data.filter((movie) => movie.category === category));
//   };

//   const openCalendar = () => {
//     setIsCalendarOpen(true);
//   };

//   const closeCalendar = () => {
//     setIsCalendarOpen(false);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     closeCalendar();
//   };

//   return (
//     <section id="schedule" className="schedule">
//       <div className="container-fluid">
//         <div className="row">
//           <h4 className="section-title">Opening this week</h4>
//         </div>
//         <div className="row">
//           <ul className="filters">
//             {filters.map((filter) => (
//               <li
//                 key={filter._id}
//                 className={`${filter.active ? "active" : undefined}`}
//                 onClick={() => {
//                   handleFilterMovie(filter.name);
//                 }}
//               >
//                 {filter.name}
//               </li>
//             ))}
//             <li className="calendar-icon" onClick={openCalendar}>
//               <FontAwesomeIcon icon={faCalendar} />
//             </li>
//           </ul>
//         </div>
//         <div className="row mt-5">
//           {movies &&
//             movies.length > 0 &&
//             movies.map((movie) => <Card key={movie._id} movie={movie} />)}
//         </div>
//       </div>
//       <CalendarModal
//         isOpen={isCalendarOpen}
//         onRequestClose={closeCalendar}
//         onDateChange={handleDateChange}
//         selectedDate={selectedDate}
//       />
//     </section>
//   );
// }

// export default Schedule;

//third code

// import React, { useState, useEffect } from "react";
// import "./schedule.css";
// import Card from "../Components/Card";
// import CalendarModal from "../Components/CalendarModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";

// function Schedule() {
//   const filterList = [
//     { _id: 1, name: "All", active: true },
//     { _id: 2, name: "Romance", active: false },
//     { _id: 3, name: "Action", active: false },
//     { _id: 4, name: "Thriller", active: false },
//     { _id: 5, name: "Horror", active: false },
//     { _id: 6, name: "Adventure", active: false },
//   ];

//   const [data, setData] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [filters, setFilters] = useState(filterList);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [currentPage, setCurrentPage] = useState(1);
//   const [moviesPerPage] = useState(6);

//   const fetchdata = () => {
//     fetch("http://localhost:3000/Data/movieData.json")
//       .then((res) => res.json())
//       .then((Data) => setData(Data))
//       .catch((e) => console.log(e.message));
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   useEffect(() => {
//     setMovies(data);
//   }, [data]);

//   const handleFilterMovie = (category) => {
//     setFilters(
//       filters.map((filter) => {
//         filter.active = false;
//         if (filter.name === category) {
//           filter.active = true;
//         }
//         return filter;
//       })
//     );

//     if (category === "All") {
//       setMovies(data);
//       return;
//     }
//     setMovies(data.filter((movie) => movie.category === category));
//     setCurrentPage(1); // Reset to first page when filter changes
//   };

//   const openCalendar = () => {
//     setIsCalendarOpen(true);
//   };

//   const closeCalendar = () => {
//     setIsCalendarOpen(false);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     closeCalendar();
//   };

//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

//   const totalPages = Math.ceil(movies.length / moviesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <section id="schedule" className="schedule">
//       <div className="container-fluid">
//         <div className="row">
//           <h4 className="section-title">Opening this week</h4>
//         </div>
//         <div className="row">
//           <ul className="filters">
//             {filters.map((filter) => (
//               <li
//                 key={filter._id}
//                 className={`${filter.active ? "active" : undefined}`}
//                 onClick={() => {
//                   handleFilterMovie(filter.name);
//                 }}
//               >
//                 {filter.name}
//               </li>
//             ))}
//             <li className="calendar-icon" onClick={openCalendar}>
//               <FontAwesomeIcon icon={faCalendar} />
//             </li>
//           </ul>
//         </div>
//         <div className="row mt-5 ">
//           {currentMovies &&
//             currentMovies.length > 0 &&
//             currentMovies.map((movie) => (
//               <Card key={movie._id} movie={movie} />
//             ))}
//         </div>
//         <div className="row mt-5">
//           <nav>
//             <ul className="pagination">
//               {[...Array(totalPages)].map((_, index) => (
//                 <li key={index} className="page-item">
//                   <button
//                     onClick={() => paginate(index + 1)}
//                     className={`page-link ${
//                       currentPage === index + 1 ? "active" : ""
//                     }`}
//                     onFocus={(e) => e.target.blur()}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//       <CalendarModal
//         isOpen={isCalendarOpen}
//         onRequestClose={closeCalendar}
//         onDateChange={handleDateChange}
//         selectedDate={selectedDate}
//       />
//     </section>
//   );
// }

// export default Schedule;

import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../Components/Card";
import CalendarModal from "../Components/CalendarModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function Schedule() {
  const filterList = [
    { _id: 1, name: "All", active: true },
    { _id: 2, name: "Romance", active: false },
    { _id: 3, name: "Action", active: false },
    { _id: 4, name: "Thriller", active: false },
    { _id: 5, name: "Horror", active: false },
    { _id: 6, name: "Adventure", active: false },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);
  const [swipe, setSwipe] = useState(false);

  const fetchdata = () => {
    fetch("http://localhost:3000/Data/movieData.json")
      .then((res) => res.json())
      .then((Data) => setData(Data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovie = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") {
      setMovies(data);
      return;
    }
    setMovies(data.filter((movie) => movie.category === category));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    closeCalendar();
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > currentPage) {
      setSwipe(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setSwipe(false);
      }, 500); // duration of the CSS transition
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilterMovie(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
            <li className="calendar-icon" onClick={openCalendar}>
              <FontAwesomeIcon icon={faCalendar} />
            </li>
          </ul>
        </div>
        <div
          className={`row mt-5 movies-container ${swipe ? "swipe-right" : ""}`}
        >
          {currentMovies &&
            currentMovies.length > 0 &&
            currentMovies.map((movie) => (
              <Card key={movie._id} movie={movie} />
            ))}
        </div>
        <div className="row mt-5">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onFocus={(e) => e.target.blur()}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <CalendarModal
        isOpen={isCalendarOpen}
        onRequestClose={closeCalendar}
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
      />
    </section>
  );
}

export default Schedule;
