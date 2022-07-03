import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../api/users";
// import { User } from "../../react-app-env";
import { setUsersAction } from "../../store/actions";
import { getUsersSelector } from "../../store/selectors";
import './users.css';

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  const getUsersFromServer = async () => {
    const response = await getUsers();

    dispatch(setUsersAction(response));
  }

  useEffect(() => {
    getUsersFromServer();
  }, []);

  const dateNormalizer = (date: string) => {
    let newDate = date.split('.')
      .slice(0, 1)
      .join('')
      .split('T')
      .join(' ');

    return newDate;
  }

  return (
    <>
      <h2>
        {`Here is the list of ${users ? users.length : 'all'} users at Mate api`}
      </h2>

      <table
        className="styled-table"
      >
        <thead>
          <tr>
            <th>
              name
            </th>

            <th>
              id
            </th>

            <th>
              email
            </th>

            <th>
              username
            </th>

            <th>
              phone
            </th>

            <th>
              website
            </th>

            <th>
              created_At
            </th>

            <th>
              updated_At
            </th>
          </tr>
        </thead>

        {users && (
          <tbody>
            {users.map(user => (
              <tr
                key={user.id}
              >
                <th
                  className={`${!user.name && 'no-data'}`}
                >
                  {user.name}
                </th>

                <td>
                  {user.id}
                </td>

                <td
                  className={`${!user.email && 'no-data'}`}
                >
                  {user.email}
                </td>

                <td
                  className={`${!user.username && 'no-data'}`}
                >
                  {user.username}
                </td>

                <td
                  className={`${!user.phone && 'no-data'}`}
                >
                  {user.phone}
                </td>

                <td
                  className={`${!user.website && 'no-data'}`}
                >
                  {user.website}
                </td>

                <td
                  className="table-item--created"
                >
                  {dateNormalizer(user.createdAt)}
                </td>

                <td
                  className={`table-item--${user.createdAt === user.updatedAt
                    ? 'created' : 'updated'}`}
                >
                  {dateNormalizer(user.updatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        )}

      </table>
    </>
  );
}