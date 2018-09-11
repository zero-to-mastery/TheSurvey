import React from 'react';
import './UserAccount.css';
import Svg from '../../components/svg/svg';

const UserAccount = (props) => {
  return (
    <div className='user-account'>
      <h4 className='user-account__heading'>Welcome, {props.name}</h4>
      <div className='user-account__container'>
        <div className='user-account__head'>
          <Svg height='4rem' name='user' className='user-account__svg' />
          <span className='user-account__header'>Personal Info</span>
          </div>
        <div className='user-account__input-div'>
          <Svg height='2rem' name='user' className='user-account__svg user-account__input-svg' />
          <span className='user-account__name'>User Name: <span className='user-account__user'>{props.name}</span></span>
          <button className='user-account__change'>Change</button>
        </div>
      </div>
    </div>
  )
}

export default UserAccount;
