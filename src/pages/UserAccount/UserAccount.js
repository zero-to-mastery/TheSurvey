import React from 'react';
import './UserAccount.css';
import user from '../../assets/img/user.png';
import settings from '../../assets/img/settings.png';

class UserAccount extends React.Component {
  state = {
    edit: false
  }

  editChangeHandler = (state) => {
    this.setState({edit: !state.edit})
  }
  
  render () {
    return (
      <div className='account'>
        <span className='account__name'>
          Welcome, <span className='account__username'>{this.props.name}</span>
        </span>
        <div className='account__container'>
          <div className='account__content'>
            <h2 className='account__header'>
              <img src={user} alt='user' />
              <span className='account__header--heading'>Personal Info</span>
            </h2>
            <div className='account__input-div'>
              <span className='account__info'>Username: {this.props.name}</span>
              <span className='account__info'>Email: {this.props.email}</span>
              <span className='account__info account__info--edit'>
                <button onClick={() => this.editChangeHandler(this.state)} className='account__edit-button'>Edit</button>
              </span>
            </div>
          </div>
          <div className='account__content'>
            <h2 className='account__header'>
              <img src={settings} alt='user' />
              <span className='account__header--heading'>Manage Account</span>
            </h2>
            <div className='account__input-div'>
              <span className='account__info'>Username: {this.props.name}</span>
              <span className='account__info'>Email: {this.props.email}</span>
              <span className='account__info account__info--edit'>
                <button onClick={() => this.editChangeHandler(this.state)} className='account__edit-button'>Edit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount;
