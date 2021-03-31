import React, { Component } from "react";
import NavBar from "./NavBar";
import admin from "./admin.png";
import "./Admin.css";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userForEdit: [],
      userId: "",
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "",
      isChangeFirstNameClicked: false,
      isChangeLastNameClicked: false,
      isChangeEmailClicked: false,
      isAddUserClicked: false,
      isShowUserClicked: false,
      forEdit: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
      },
      restraunts: [],
      restrauntsForEdit: [],
      userOrders: [],
      userOrdersForEdit: [],
      isUsersLoaded: false,
      isRestrauntsLoaded: false,
      isUsersOrdersLoaded: false,
      isEditUserClicked: false,
      isEditUserOrdersClicked: false,
      isEditRestrauntsClicked: false,

      isUserEditFormClicked: false,
    };
    this.showRestraunts = this.showRestraunts.bind(this);
    this.showUsers = this.showUsers.bind(this);
    this.showUserOrders = this.showUserOrders.bind(this);
    this.editUserData = this.editUserData.bind(this);
    this.deleteUserData = this.deleteUserData.bind(this);

    this.editRestrauntData = this.editRestrauntData.bind(this);
    this.deleteRestrauntData = this.deleteRestrauntData.bind(this);

    this.editUserOrderData = this.editUserOrderData.bind(this);
    this.deleteUserOrderData = this.deleteUserOrderData.bind(this);

    this.changeFirstName = this.changeFirstName.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("email") !== "admin@foody.com") {
      window.location.href = "/login";
    }
  }

  showRestraunts() {
    axios.get("http://localhost:5000/restraunts").then((res) => {
      this.setState(
        {
          restraunts: res.data,
          isRestrauntsLoaded: true,
          isUsersLoaded: false,
          isUsersOrdersLoaded: false,
        },
        () => {
          console.log("State " + this.state.restraunts);
        }
      );
    });
  }
  showUsers() {
    axios.get("http://localhost:5000/users").then((res) => {
      this.setState(
        {
          users: res.data,
          isUsersLoaded: true,
          isUsersOrdersLoaded: false,
          isRestrauntsLoaded: false,
        },
        () => {
          console.log("State " + this.state.users);
        }
      );
    });
  }
  showUserOrders() {
    axios.get("http://localhost:5000/userOrders").then((res) => {
      console.log(res.data);

      this.setState(
        {
          userOrders: res.data,
          isUsersOrdersLoaded: true,
          isUsersLoaded: false,
          isRestrauntsLoaded: false,
        },
        () => {
          console.log("State " + this.state.userOrders);
        }
      );
    });
  }
  editUserData(e, user) {
    console.log("user " + user);
    this.setState(
      (prevState) => ({
        isEditUserClicked: true,
        isUsersLoaded: false,
        userForEdit: user,
        forEdit: {
          ...prevState.forEdit,
          id: user._id,
        },
      }),
      () => {
        console.log("CallBack of editUserData");
      }
    );
  }
  changeUserId(e) {
    console.log("Input Value of First Name " + e.target.value);

    this.setState(
      (prevState) => ({
        userId: e.target.value,
        forEdit: {
          ...prevState.forEdit,
          firstName: e.target.value,
        },
        isChangeFirstNameClicked: true,
      }),
      () => {
        console.log(
          "Inside changeFirstName forEdit:{firstName } " +
            this.state.forEdit.firstNameForEdit
        );
      }
    );
  }
  changeFirstName(e) {
    console.log("Input Value of First Name " + e.target.value);

    this.setState(
      (prevState) => ({
        userFirstName: e.target.value,
        forEdit: {
          ...prevState.forEdit,
          firstName: e.target.value,
        },
        isChangeFirstNameClicked: true,
      }),
      () => {
        console.log(
          "Inside changeFirstName forEdit:{firstName } " +
            this.state.forEdit.firstNameForEdit
        );
      }
    );
  }
  changeLastName(e) {
    this.setState(
      (prevState) => ({
        userLastName: e.target.value,
        forEdit: {
          ...prevState.forEdit,
          lastName: e.target.value,
        },
        isChangeLastNameClicked: true,
      }),
      () => {
        console.log(
          "Inside changeFirstName forEdit:{lastName } " +
            this.state.forEdit.lastNameForEdit
        );
      }
    );
  }
  changeEmail(e) {
    this.setState(
      (prevState) => ({
        userEmail: e.target.value,
        forEdit: {
          ...prevState.forEdit,
          email: e.target.value,
        },
        isChangeEmailClicked: true,
      }),
      () => {
        console.log(
          "Inside changeFirstName forEdit:{emailName } " +
            this.state.forEdit.emailForEdit
        );
      }
    );
  }
  changePassword(e) {
    this.setState(
      (prevState) => ({
        userPassword: e.target.value,
        forEdit: {
          ...prevState.forEdit,
          email: e.target.value,
        },
        isChangeEmailClicked: true,
      }),
      () => {
        console.log(
          "Inside changeFirstName forEdit:{emailName } " +
            this.state.forEdit.emailForEdit
        );
      }
    );
  }
  submitEditForm(event) {
    // event.preventDefault();
    if (this.state.isAddUserClicked === true) {
      const addUser = {
        id: this.state.userId,
        email: this.state.userEmail,
        firstName: this.state.userFirstName,
        lastName: this.state.userLastName,
        password: this.state.userPassword,
      };
      axios.post("http://localhost:5000/api", addUser);
    }

    axios.post("http://localhost:5000/editUser", this.state.forEdit);

    console.log("Inside SubmitEDit Form");
  }

  deleteUserData(e, email) {
    console.log("Delete Event " + e);
    console.log("Delete Email " + email);
    const Continue = window.confirm("Do you want to continue ?");
    if (Continue === true) {
      console.log("Inside Continue...");
      const emailForDelete = {
        dmail: email,
      };

      console.log(emailForDelete.dmail);
      axios.delete("http://localhost:5000/users", { data: emailForDelete });
    }
  }
  editUserOrderData(e, email) {}
  deleteUserOrderData(e, email) {
    console.log("Delete Event " + e);
    console.log("Delete Email " + email);
    const Continue = window.confirm("Do you want to continue ?");
    if (Continue === true) {
      console.log("Inside Continue...");
      const emailForDelete = {
        dmail: email,
      };

      console.log(emailForDelete.dmail);
      axios.delete("http://localhost:5000/userOrders", {
        data: emailForDelete,
      });
    }
  }

  editRestrauntData(restroFullName) {}
  deleteRestrauntData(restroId) {
    console.log("Restroid      " + restroId);
    const Continue = window.confirm("Do you want to continue ?");
    if (Continue === true) {
      console.log("Inside Continue...");
      const restroForDelete = {
        drestro: restroId,
      };

      axios.delete("http://localhost:5000/restraunts", {
        data: restroForDelete,
      });
    }
  }
  logOut() {
    console.log("LogOut Button Clicked");
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    const userTableRow = this.state.users.map((mapUser) => {
      return (
        <tr className="tableContent">
          <td>{mapUser.firstName}</td>
          <td>{mapUser.lastName}</td>
          <td>{mapUser.email}</td>
          <td>
            <button
              className="adminEdit"
              onClick={(e) => {
                this.editUserData(e, mapUser);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="adminDelete"
              onClick={(e) => {
                this.deleteUserData(e, mapUser.email);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    const restrauntTableRow = this.state.restraunts.map((mapRestraunts) => {
      return (
        <tr className="tableContent">
          <td style={{ paddingRight: "10px" }}>
            {mapRestraunts.restroFullName}
          </td>
          <td style={{ paddingRight: "10px" }}>
            {mapRestraunts.restroShortName}
          </td>
          <td style={{ paddingRight: "10px" }}>{mapRestraunts.restroBrief}</td>
          <td style={{ paddingRight: "10px" }}>{mapRestraunts.restroType}</td>
          <td style={{ paddingRight: "10px" }}>
            {mapRestraunts.restroAddress}
          </td>
          <td style={{ paddingRight: "10px" }}>
            {mapRestraunts.restroAvailability ? "Open" : "Closed"}
          </td>
          <td style={{ paddingRight: "10px" }}>
            {mapRestraunts.retroCostForTwo}
          </td>
          <td>
            {mapRestraunts.menu.map((Rmenu) => {
              return (
                <p style={{ textAlign: "center" }}>
                  {Rmenu.foodName} {Rmenu.foodPrice}
                </p>
              );
            })}
          </td>
          <td>
            <button
              className="adminEdit"
              onClick={(e) => {
                this.editRestrauntData(mapRestraunts.restroFullName);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="adminDelete"
              onClick={(e) => {
                this.deleteRestrauntData(mapRestraunts._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    const userOrdersTableRow = this.state.userOrders.map((mapUserOrders) => {
      return (
        <tr className="tableContent">
          <td>{mapUserOrders.email}</td>
          <td>
            {mapUserOrders.orders.map((UOrders) => {
              return (
                <p style={{ textAlign: "center" }}>
                  {UOrders.foodName} {UOrders.foodPrice}
                </p>
              );
            })}
          </td>
          <td>
            <button
              className="adminEdit"
              onClick={(e) => {
                this.editUserOrderData(e, mapUserOrders.email);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="adminDelete"
              onClick={(e) => {
                this.deleteUserOrderData(e, mapUserOrders.email);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="dashboard">
        <NavBar />
        <div className="adminProfileCover"></div>
        <div className="adminDashDiv">
          <div className="profilePicture">
            <img
              src={admin}
              style={{
                position: "absolute",
                top: "7px",
                left: "7px",
                height: "237px",
                width: "237px",
              }}
              alt="Profile"
            />
          </div>

          <h3 className="adminTitle">Admin</h3>
          <div className="userContent">
            <div className="showData">
              <button className="showButton" onClick={this.showRestraunts}>
                Show Restraunts
              </button>
              <button className="showButton" onClick={this.showUsers}>
                Show Users
              </button>
              <button className="showButton" onClick={this.showUserOrders}>
                Show User Orders
              </button>
            </div>

            <div className="adminUserOrders">
              {this.state.isUsersLoaded ? (
                <button
                  className="addUserAdmin"
                  onClick={(e) => {
                    this.setState({
                      isAddUserClicked: true,
                      isUsersLoaded: false,
                    });
                  }}
                >
                  Add User
                </button>
              ) : (
                <div></div>
              )}
              {this.state.isAddUserClicked ? (
                <div className="editForm">
                  <form onSubmit={this.submitEditForm}>
                    <label>User Id</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeUserId(e);
                      }}
                      value={this.state.userId}
                    />
                    <label>First Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeFirstName(e);
                      }}
                      value={this.state.userFirstName}
                    />
                    <label>Last Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeLastName(e);
                      }}
                      value={this.state.userLastName}
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeEmail(e);
                      }}
                      value={this.state.userEmail}
                    />
                    <label>Password</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changePassword(e);
                      }}
                      value={this.state.userPassword}
                    />
                    <button>Add</button>
                  </form>
                </div>
              ) : (
                <form></form>
              )}

              {this.state.isEditUserClicked ? (
                <div className="editForm">
                  <form onSubmit={this.submitEditForm}>
                    <label>First Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeFirstName(e);
                      }}
                      value={
                        this.state.isChangeFirstNameClicked
                          ? this.state.userFirstName
                          : this.state.userForEdit.firstName
                      }
                    />
                    <label>Last Name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeLastName(e);
                      }}
                      value={
                        this.state.isChangeLastNameClicked
                          ? this.state.userLastName
                          : this.state.userForEdit.lastName
                      }
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.changeEmail(e);
                      }}
                      value={
                        this.state.isChangeEmailClicked
                          ? this.state.userEmail
                          : this.state.userForEdit.email
                      }
                    />
                    <button>Edit</button>
                  </form>
                </div>
              ) : (
                <form></form>
              )}

              <table>
                {this.state.isUsersLoaded ? (
                  <tr className="tableTitle">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                ) : (
                  <tr></tr>
                )}
                {this.state.isUsersLoaded ? userTableRow : <tr />}

                {this.state.isRestrauntsLoaded ? (
                  <tr className="tableTitle">
                    <th>Restraunts Full Name</th>
                    <th>Short Name</th>
                    <th>Brief</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Availability</th>
                    <th>CostTw</th>
                    <th>Menu</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                ) : (
                  <tr></tr>
                )}
                {this.state.isRestrauntsLoaded ? restrauntTableRow : <tr />}

                {this.state.isUsersOrdersLoaded ? (
                  <tr className="tableTitle">
                    <th>Email</th>
                    <th>Oreders</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                ) : (
                  <tr></tr>
                )}
                {this.state.isUsersOrdersLoaded ? userOrdersTableRow : <tr />}
              </table>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "centr",
              }}
            >
              <button
                className="adminlogOut"
                onClick={(e) => {
                  this.logOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
