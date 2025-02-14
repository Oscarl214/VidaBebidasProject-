'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DateCalendar, TimePicker } from '@mui/x-date-pickers';
import { toast } from 'react-hot-toast';
import dayjs, { Dayjs } from 'dayjs';
import BookedDates from './bookedDates';
import BookingDetails from './bookingDetails';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [bookedDates, setBookedDates] = useState<Dayjs[]>([]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const createUser = async () => {
    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }
    if (!name) {
      toast.error('Please enter your first name');
      return;
    }

    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    if (!address) {
      toast.error('Please enter your address');
      return;
    }
    if (!phone) {
      toast.error('Please enter your phone number');
      return;
    }

    if (!service) {
      toast.error('Please choose a Service');
    }

    const bookingDate = dayjs(selectedDate).format('YYYY-MM-DD');
    const bookingTime = dayjs(selectedTime).format('hh:mm A');

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: bookingDate,
        time: bookingTime,
        name,
        email,
        phone,
        address,
        message,
        service,
      }),
    });

    const data = await response.json();
    console.log('Response Data:', data);
    const { bookingId } = data;
    console.log('Booking ID:', bookingId);
    if (response.ok) {
      sessionStorage.setItem('bookingId', bookingId);
      router.push(`/waiver?email=${email}&name=${name}`);
    } else {
      toast.error(data.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center py-10 bg-black min-h-screen">
      <form className="flex flex-col gap-5 p-6 bg-white w-full max-w-lg border border-gray-300 rounded-lg shadow-lg m-2">
        <h1 className="font-bold text-3xl text-center text-gray-800">
          VidaBebidasProject Booking Form
        </h1>
        <p className="text-sm text-yellow-600">
          Please note the following details before Booking:
        </p>
        <BookingDetails />
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm text-gray-700">
            Name
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white text-base"
              placeholder="Alvin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-gray-700">
          Email
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white text-white text-base"
            placeholder="alvin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-700">
          Choice of Service
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <input
                type="radio"
                name="service"
                className="radio radio-warning"
                id="SilverPackage"
                value="SilverPackage"
                checked={service === 'SilverPackage'}
                onChange={(e) => setService(e.target.value)}
              />
              <label htmlFor="SilverPackage" className="text-sm">
                SilverPackage ($250 1-6hrs)
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                name="service"
                className="radio radio-warning"
                id="ReposadoPackage"
                value="ReposadoPackage"
                checked={service === 'ReposadoPackage'}
                onChange={(e) => setService(e.target.value)}
              />
              <label htmlFor="ReposadoPackage" className="text-sm">
                ReposadoPackage ($325 1-6hrs)
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                name="service"
                className="radio radio-warning"
                id="AñejoPackage"
                value="AñejoPackage"
                checked={service === 'AñejoPackage'}
                onChange={(e) => setService(e.target.value)}
              />
              <label htmlFor="AñejoPackage" className="text-sm">
                AñejoPackage ($400 1-5hrs)
              </label>
            </li>
          </ul>
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-700">
          Address of Event
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white text-base"
            placeholder="1234 Mockingbird Lane, Dallas, TX 75209"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-700">
          Phone Number
          <input
            type="tel"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white text-base"
            placeholder="469-768-6711"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-700">
          Questions|Comments
          <textarea
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-white text-base"
            maxLength={200}
            placeholder="Do you go and get the liquor..?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div className="flex flex-col justify-center items-center text-black bg-white border border-yellow-500 rounded-lg p-6 shadow-md overflow-auto">
          <h2 className="text-2xl font-bold ">Select the Day of Your Event</h2>
          {/* <BookedDates /> */}
        </div>
        <div className="flex flex-col justify-center items-center text-black bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Calendar</h2>
          <DateCalendar
            disablePast
            // shouldDisableDate={isDateBooked}
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-black bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Time</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please choose the time you would like me to arrive at your event.
          </p>
          <TimePicker
            views={['hours', 'minutes']}
            value={selectedTime}
            format="hh:mm a"
            onChange={(newTime) => setSelectedTime(newTime)}
          />
        </div>

        <Button
          className="bg-orange-400 rounded-sm hover:bg-[#FFFFF0] hover:text-black hover:animate-pulse"
          variant="shadow"
          onClick={createUser}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
