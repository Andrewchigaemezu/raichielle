import style from "./DashboardTop.module.css";
import Header3 from "../../utilities/Header3";
import SmallText from "../../utilities/SmallText";
import notification_icon from "../../assets/icons/notification_icon.svg";
// import markall_icon from "../../assets/icons/markall_icon.svg";
import selectall_icon from "../../assets/icons/selectall_icon.svg";
import delete_icon from "../../assets/icons/delete_icon.svg";
import edit_icon from "../../assets/icons/edit_icon.svg";
import add_icon from "../../assets/icons/add_icon.svg";

function DashboardTop() {
  return (
    <div className={style.dashboardtop}>
      <div className={style.dashboardtop_first_cont}>
        <div>
          <Header3>Home</Header3>
          <SmallText>Welcome back</SmallText>
        </div>
        <div className={style.input_cont}>
          <input />
          <img src={notification_icon} alt="notification icon" />
        </div>
      </div>
      <div className={style.dashboardtop_second_cont}>
        <div className={style.quick_action_cont}>
          <span>
            <img src={selectall_icon} alt="select all icon" />
            <SmallText>Select all</SmallText>
          </span>
          <span>
            <img src={delete_icon} alt="delete icon" />
            <SmallText>Delete</SmallText>
          </span>
          <span>
            <img src={edit_icon} alt="edit icon" />
            <SmallText>Edit</SmallText>
          </span>
        </div>
        <a href="#" className={style.btn_add_product}>
          <img src={add_icon} alt="add icon" />
          <SmallText>Add Product</SmallText>
        </a>
      </div>
    </div>
  );
}

export default DashboardTop;
