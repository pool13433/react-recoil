import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserIDState } from "../recoil/atom";
import { currentUserInfoQuery, currentUserNameQuery, currentUserNameState, friendsInfoQuery } from "../recoil/selector";

function CurrentUserInfo() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);
    const setCurrentUserID = useSetRecoilState(currentUserIDState);
    return (
        <div>
            <h1>{currentUser.name}</h1>
            <ul>
                {friends.map(friend =>
                    <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
                        {friend.name}
                    </li>
                )}
            </ul>
        </div>
    );
}
export default CurrentUserInfo