import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';
import Title from 'components/shared/Title/Title';

const Introduction = ({ setIsFormStarted }) => {
  const handleClick = () => {
    setIsFormStarted(true);
  };

  const provider = 'woo';

  return (
    <>
      <Title />
      <div className="wmnds-col-1 wmnds-col-md-3-4 wmnds-col-lg-1-2">
        <h2>Use this service to:</h2>
        <p>Exchange your car for mobility credits.</p>
        <p>This process takes around 15 minutes.</p>

        <h2>About mobility credits</h2>
        <p>If you exchange your car for mobility credits, you will receive mobility credits on a card that you can use to spend on transport that you can use instead of your car.</p>

        <h2>How it works</h2>
        <ul>
          <li>Complete the application form</li>
          <li>We send you a {provider} card with £100 on it, and a Swift card</li>
          <li>We collect your car</li>
          <li>We top up your {provider} card with the rest of your mobility credits</li>
          <li>Spend your credits</li>
        </ul>

        <h2>What you will receive</h2>
        <p>When you sign up for mobility credits, you'll receive two cards.</p>

        <p>The {provider} card is just like a debit card, but you can only use it to pay for transport services. This card will have your personal mobility credits balance on it.
</p>
        <p>We'll also send you a Swift card valid for travel on the bus, train or tram in the West Midlands for one week, to get you started. If you'd like to use the Swift card again, you can <a href="https://www.networkwestmidlands.com/tickets/#/">buy a season ticket</a> with your {provider} card.</p>


        <h2 id="services-you-can-spend-mobility-credits-on">Services you can spend mobility credits on</h2>

        <p>Mobility credits can be spent on the bus, train, tram, taxi and car club in the West Midlands.</p>

        <h3 id="bus">Bus</h3>

        <p>You can use your mobility credits on the bus in the West Midlands. Simply tap your {provider} card on the bus when you're using it.</p>

        <p>If you're travelling on the bus regularly, it might be cheaper to <a href="https://www.networkwestmidlands.com/tickets/#/">buy a season ticket</a>. You can load this onto your Swift card.</p>

        <h3 id="train">Train</h3>
        <p>You can use your {provider} card to buy train tickets at a rail station ticket machine, or using a mobile app like <a href="https://www.westmidlandsrailway.co.uk/">West Midlands Railway</a>.</p>

        <h3 id="car-club">Car club</h3>
        <p>You can <a href="enterprisecarclub.co.uk/gb/en/programs/regions/midlands/birmingham.html">sign up for Enterprise car club</a> for free and receive £x free credit. Use your {provider} card to pay for the car club.</p>

        <h3 id="taxi">Taxi</h3>
        <p>Use your {provider} card to pay for taxis. Taxi services in Coventry include:</p>
        <ul>
          <li>Gett</li>
          <li>Uber</li>
          <li>Ola</li>
        </ul>
        <p>Or you can hail a black cab in the street and pay using your {provider} card. </p>

        <h3>What you'll need</h3>

        <ul>
          <li>
            You will need your vehicle log book (V5C)
          </li>
        </ul>
        <button
          type="button"
          className="wmnds-btn wmnds-btn--start"
          onClick={handleClick}
        >
          Start now
          <Icon
            className="wmnds-btn__icon wmnds-btn__icon--right"
            iconName="general-chevron-right"
          />
        </button>
      </div>
    </>
  );
};

Introduction.propTypes = {
  setIsFormStarted: PropTypes.func.isRequired,
};

export default Introduction;
