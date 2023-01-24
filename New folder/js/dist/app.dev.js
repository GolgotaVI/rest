"use strict";

$(function () {
  $('.show').mouseover(function () {
    $('.list--hide').show();
  });
  $('.list--hide').mouseleave(function () {
    $('.list--hide').hide();
  });
  $('#show--menu').click(function () {
    $('.menu--hide').slidedown();
  });
  $('#close--menu').click(function () {
    $('.menu--hide').hide();
  });
});