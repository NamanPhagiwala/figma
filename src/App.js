import './App.css';

function App() {

  return (
    <div className="App">
      <div className='home'>
        <div className='logo'> By Naman </div>
        <div className='nav-menu'>
          <span> Explore </span>
          <span> Cities </span>
          <span> About us </span>
          <span className='menu-button'> Call </span>
        </div>
        <div className='title'> Rethink your<br />living & renting <br />
          <label> Make your stay painless with us</label>
        </div>
        <div className='search'>
          <div className='search-box'>
            <div className='search-select'> CITY <br />
              <span class="">Select your City </span>
            </div>
            <div className='search-select'> DATE<br />
            <span class="">Select your date </span>
            </div>
            <div className='search-select'> GUEST <br />
            <span class="">Add guest </span>
            </div>
            <div className='search-select button'><i class="fas fa-search"></i>Search</div>
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='heading'> Explore<br />
          <div>From one-guest rooms to<br /> penthouses with pools and gardens</div>
        </div>
        <div className='main-content'>
          <div className='main-item' id="item-1">
            <div className='main-box'>
              <div className='main-title'> Room with one king size bed </div>
              <div className='main-button button'> 35$ </div>
              <div className='main-button button'> 28M<sup>2</sup> </div>
              <div className='main-book button'> Book </div>
            </div>
          </div>
          <div className='main-item' id="item-2">
            <div className='main-box'>
              <div className='main-title'> Penthouse for 8 persons </div>
              <div className='main-button button'> 2039$ </div>
              <div className='main-button button'> 438M<sup>2</sup> </div>
              <div className='main-book button'> Book </div>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutus'>
        <div className='heading'>
          About Us
          <div> Allow us to tell you a short story..</div>
        </div>
        <div className='chapter-1'>
          <div className='info'>
            <h1>Chapter I</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className='chapter-2'>
          <div className='info'>
            <h1>Chapter II</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className='chapter-3'>
          <div className='info'>
            <h1>Chapter III</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className='chapter-4'>
          <div className='info'>
            <h1>Chapter IV</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
          </div>
        </div>
        <div className='footer'>
          <div className='logo'> By Naman </div>
          <div className='nav-menu'>
            <span> Explore </span>
            <span> Cities </span>
            <span> About us </span>
            <span className='menu-button'> Call </span>
          </div>
          <div className='reserve' style={{textAlign: 'center'}}> Front-End Developer : <br/>  Naman Phagiwala <br /> Namanphagiwala21@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
