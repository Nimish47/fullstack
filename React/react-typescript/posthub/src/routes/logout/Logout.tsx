import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { resetUser } from '../../redux/slice/UserSlice';
import type { RootState } from '../../redux/store';
import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {

  const username = useSelector((state: RootState) => state.userdetails.username)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(resetUser())
    navigate('/login')
  }, [])


  if (!username) return <Navigate to='/login' />

  return (
    <div>Logging out...</div>
  )
}

export default Logout