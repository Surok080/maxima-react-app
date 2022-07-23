import { Routes, Route, useNavigate } from 'react-router-dom';
import { Registration, Login, SearchBook, LibraryBook, InfoBook } from '../providers';



function Routing() {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path='/'
        element={<Login
          navigate={navigate}
        />} />
      <Route
        path='/registration'
        element={<Registration
          navigate={navigate}
        />} />
      <Route
        path='/search'
        element={<SearchBook
          navigate={navigate}
        />} />
      <Route
        path='/library'
        element={<LibraryBook
          favorite={true}
          navigate={navigate}
        />} />
      <Route
        path='/favorite'
        element={<LibraryBook
          favorite={false}
          navigate={navigate}
        />} />
      <Route
        path='/info'
        element={<InfoBook
          navigate={navigate}
        />} />
    </Routes>
  );

}
export default Routing;

