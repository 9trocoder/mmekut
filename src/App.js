import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accountpage from "./pages/accountpage/accountpage";
import AddTaskpage from "./pages/addTaskpage/addTaskpage";
import Calendarpage from "./pages/calendarpage/calendarpage";
import Chatpage from "./pages/chatpage/chatpage";
import Homepage from "./pages/homepage/homepage";
import Messagepage from "./pages/messagepage/messagepage";
import Notificationpage from "./pages/notificationpage/notificationpage";
import Settingspage from "./pages/settingspage/settingspage";
import Taskpage from "./pages/taskpage/taskpage";
import UserChatProfilepage from "./pages/userChatProfilepage/userChatProfilepage";
import Workspacepage from "./pages/workspacepage/workspacepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/account" element={<Accountpage />} />
        <Route path="/add_task" element={<AddTaskpage />} />
        <Route path="/calendar" element={<Calendarpage />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/message" element={<Messagepage />} />
        <Route path="/notification" element={<Notificationpage />} />
        <Route path="/settings" element={<Settingspage />} />
        <Route path="/task" element={<Taskpage />} />
        <Route path="/user_chat_profile" element={<UserChatProfilepage />} />
        <Route path="/workspace" element={<Workspacepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
