import React from "react";
import { fetchUsers } from "../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function UserListContainer(props) {
    const { userState, fetchUsers } = props;
    const { loading, error, users } = userState;
    return (
        <div>
            <button onClick={fetchUsers}>Load Users</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                users.map(user => {
                    return (
                        <ul key={user.id}>
                            <li>{user.name}</li>
                        </ul>
                    );
                })
            )}
            {error && <p>error}</p>}
        </div>
    );
}
UserListContainer.propTypes = {
    userState: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired
};
const mapStateToProps = state => {
    return {
        userState: state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
