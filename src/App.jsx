import { createBrowserRouter, RouterProvider } from "react-router-dom"
import First from "./routes/First"
import Private from "./routes/Private"
import LandingPage from "./pages/landing/LandingPage"
import ErrorPage from "./components/ErrorPage"
import EventCategories from "./pages/eventCategories/EventCategories"
import ExoloreCategory from "./pages/exploreCategory/ExoloreCategory"
import EventDetails from "./pages/eventDetails/EventDetails"
import Favorites from "./pages/favorites/Favorites"
import EmailVerification from "./pages/verification/EmailVerification"
import ForgetPassword from "./pages/forgetPassword/ForgetPassword"
import Verify from "./pages/verification/Verify"
import ResetPassword from "./pages/resetPassword/ResetPassword"
import PasswordResetSuccessful from "./pages/passwordResetSuccessful/PasswordResetSuccessfull"
import UserTicketPurchace from "./pages/userTicketPurchase/UserTicketPurchace"
import UserTicketDetails from "./pages/userTicketDetails/UserTicketDetails"
import TicketDetailsAfterPurchase from "./pages/ticketDetailsAfterPurchase/TicketDetailsAfterPurchase"
import CheckIn from "./pages/dashboard/checkIn/CheckIn"
import CreateEvent from "./pages/dashboard/createEvent/CreateEvent"
import ManageEvent from "./pages/dashboard/manageEvent/ManageEvent"
import ManageEventDetails from "./pages/dashboard/manageEventDetailsScreen/ManageEventDetails"
import Overview from "./pages/dashboard/overview/Overview"
import PayoutDetails from "./pages/dashboard/payoutDetails/PayoutDetails"
import Profile from "./pages/dashboard/profile/Profile"
import TicketSales from "./pages/dashboard/ticketSales/TicketSales"
import SignIn from "./pages/auth/sigin/SignIn"
import SignUp from "./pages/auth/signup/SignUp"

const App = () => {

  const routes = createBrowserRouter([
    {
      element: <First />,
      children: [
        {
          path: "/" ,
          errorElement: <ErrorPage/>,
          element: <LandingPage/>
        }, 
        {
          path: "event-categories" ,
          errorElement: <ErrorPage/>,
          element: <EventCategories/>
        },
        {
          path: "explore-category" ,
          errorElement: <ErrorPage/>,
          element: <ExoloreCategory/>
        },
        {
          path: "event-detils" ,
          errorElement: <ErrorPage/>,
          element: <EventDetails/>
        },
        {
          path: "favorite" ,
          errorElement: <ErrorPage/>,
          element: <Favorites/>
        },
        {
          path: "user-ticket-purchace" ,
          errorElement: <ErrorPage/>,
          element: <UserTicketPurchace/>
        },
        {
          path: "user-ticket-details" ,
          errorElement: <ErrorPage/>,
          element: <UserTicketDetails/>
        },
        {
          path: "ticket-details-after-purchase" ,
          errorElement: <ErrorPage/>,
          element: <TicketDetailsAfterPurchase/>
        },
        {
          path: "*" ,
          errorElement: <ErrorPage/>,
          element: <LandingPage/>
        }, 
      ],
    },
    {
      element: <Private/>,
      children: [
        {
          path: "dashboard/checkin" ,
          errorElement: <ErrorPage/>,
          element: <CheckIn/>
        },
        {
          path: "dashboard/crete-event" ,
          errorElement: <ErrorPage/>,
          element: <CreateEvent/>
        },
        {
          path: "dashboard/manage-event" ,
          errorElement: <ErrorPage/>,
          element: <ManageEvent/>
        },
        {
          path: "dashboard/manage-event-details" ,
          errorElement: <ErrorPage/>,
          element: <ManageEventDetails/>
        },
        {
          path: "dashboard/overview" ,
          errorElement: <ErrorPage/>,
          element: <Overview/>
        },
        {
          path: "dashboard/payout-details" ,
          errorElement: <ErrorPage/>,
          element: <PayoutDetails/>
        },
        {
          path: "dashboard/profile" ,
          errorElement: <ErrorPage/>,
          element: <Profile/>
        },
        {
          path: "dashboard/ticket-sales" ,
          errorElement: <ErrorPage/>,
          element: <TicketSales/>
        },
      ]
    },
      {
        path: "login" ,
        errorElement: <ErrorPage/>,
        element: <SignIn/>
      },
      {
        path: "register" ,
        errorElement: <ErrorPage/>,
        element: <SignUp/>
      },
      {
        path: "email-verification" ,
        errorElement: <ErrorPage/>,
        element: <EmailVerification/>
      },
      {
        path: "forget-password" ,
        errorElement: <ErrorPage/>,
        element: <ForgetPassword/>
      },
      {
        path: "verify" ,
        errorElement: <ErrorPage/>,
        element: <Verify/>
      },
      {
        path: "reset-password" ,
        errorElement: <ErrorPage/>,
        element: <ResetPassword/>
      },
      {
        path: "password-reset-successFull" ,
        errorElement: <ErrorPage/>,
        element: <PasswordResetSuccessful/>
      },
     
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App