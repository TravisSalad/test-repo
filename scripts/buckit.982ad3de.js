"use strict";var map=L.map("map").setView([47.6062,-122.3321],12);L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);var GooglePlacesSearchBox=L.Control.extend({onAdd:function(){document.getElementById("searchBox")}}),input=document.getElementById("searchBox"),searchBox=new google.maps.places.SearchBox(input);$(".searchBtn").on("click",function(){var a=searchBox.getPlaces();if(0!=a.length){var b=L.featureGroup();a.forEach(function(a){var c=L.marker([a.geometry.location.lat(),a.geometry.location.lng()]);b.addLayer(c)}),b.addTo(map),map.fitBounds(b.getBounds())}}),$(".addBtn").on("click",function(){var a=$("<li>").appendTo("#buckit-sub"),b=$("#searchBox").val();$(a).append(b),console.log(b)});