import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Athletes } from '../features/athletes/Athletes';
import { Clubs } from '../features/clubs/Clubs';
import { Events } from '../features/events/Events';
import { Coaches } from "../features/coaches/Coaches";
import { Login } from "../features/login/Login";
import { PrivateRoute } from "../routes/PrivateRoute";
import { PublicRoute } from "../routes/PublicRoute";
import { Paths } from './Paths';


export const Router = () => {
  return (
    <BrowserRouter>
           <Routes>
                 <Route exact path={Paths.login} element={<PublicRoute/>}>
                    <Route exact path={Paths.login} element={<Login/>}/>
                  </Route>
                 <Route exact path={Paths.coaches} element={<PrivateRoute/>}>
                    <Route exact path={Paths.coaches} element={<Coaches/>}/>
                  </Route>
                  <Route exact path={Paths.events} element={<PrivateRoute/>}>
                    <Route exact path={Paths.events} element={<Events/>}/>
                  </Route>
                  <Route exact path={Paths.clubs} element={<PrivateRoute/>}>
                    <Route exact path={Paths.clubs} element={<Clubs/>}/>
                  </Route>
                  <Route exact path={Paths.athletes} element={<PrivateRoute/>}>
                    <Route exact path={Paths.athletes} element={<Athletes/>}/>
                  </Route>
          </Routes>
    </BrowserRouter>
  );
}