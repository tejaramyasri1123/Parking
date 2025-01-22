import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const NearestLocationFinder = () => {
    const predefinedLocations = [
        { name: 'srmt', lat: 16.99866550323828, lon: 82.24318146078677 },
        { name: 'V9 restaurent', lat: 17.0838110194955, lon: 82.06193806658548 },
        { name: 'Aditya Engineering College', lat: 17.087498288732764, lon: 82.0617061462663 },
        { name: 'RajaGopal Center', lat: 16.833398604394237, lon: 82.03457513869574 },
        { name: 'Surya cinemax', lat: 16.83292507343081, lon: 82.03322528583993 }
    ];

    const [nearestLocation, setNearestLocation] = useState(null);
    const [userLat, setUserLat] = useState(null);
    const [userLon, setUserLon] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false); 

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        setUserLat(lat);
                        setUserLon(lon);
                        findNearestLocation(lat, lon);
                    },
                    (error) => {
                        console.error('Error getting user location:', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        const findNearestLocation = (lat, lon) => {
            let minDistance = Number.MAX_VALUE;
            let nearestLocation = null;

            predefinedLocations.forEach(location => {
                const distance = haversine(lat, lon, location.lat, location.lon);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestLocation = location;
                }
            });

            setNearestLocation(nearestLocation);
        };

        const haversine = (lat1, lon1, lat2, lon2) => {
            const R = 6371; 
            const dLat = (lat2 - lat1) * Math.PI / 180;  
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; 
            return distance;
        };

        getUserLocation();

    }, []);

    useEffect(() => {
        if (userLat && userLon && nearestLocation) {
            showMap(userLat, userLon); 
        }
    }, [userLat, userLon, nearestLocation]);

    const showMap = (lat, lon) => {
        if (!mapLoaded) { 
            const map = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([lat, lon]).addTo(map)
                .bindPopup('Your Location')
                .openPopup();

            if (nearestLocation) {
                L.marker([nearestLocation.lat, nearestLocation.lon]).addTo(map)
                    .bindPopup(nearestLocation.name)
                    .openPopup();
            }

            setMapLoaded(true); 
        }
    };

    const handleNavigate = () => {
        if (userLat && userLon && nearestLocation) {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${nearestLocation.lat},${nearestLocation.lon}`, '_blank');
        }
    };

    return (
        <div className="white p-6 top-0 h-screen rounded-lg shadow-md">
            {userLat && userLon && nearestLocation ? (
                <div>
                    <p className="text-orange-500 text-xl font-bold mb-4 ">Nearest parking spot is at : {nearestLocation.name}</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" onClick={handleNavigate}>Navigate</button>
                    <div id="map" className="mt-6" style={{ height: '400px' }}></div>
                </div>
            ) : (
                <p className="text-orange-900 text-lg font-semibold">Finding nearest location...</p>
            )}
        </div>
    );
};

export default NearestLocationFinder;
