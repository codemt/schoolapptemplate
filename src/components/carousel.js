import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/Carousel-Hero.css';
import $ from 'jquery';
import '../../node_modules/jquery/dist/jquery.min.js';
 class carrot extends Component {
  
    
  render() {
    

    return (
        <div class="carousel slide" data-ride="carousel" id="carousel-1">
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <div class="jumbotron hero-nature carousel-hero">
                <h1 class="hero-title">Hero Nature</h1>
                <p class="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <p><a class="btn btn-primary btn-lg hero-button" href="#">Learn more</a></p>
            </div>
        </div>
        <div class="item">
            <div class="jumbotron hero-photography carousel-hero">
                <h1 class="hero-title">Hero Photography</h1>
                <p class="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <p><a class="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
            </div>
        </div>
        <div class="item">
            <div class="jumbotron hero-technology carousel-hero">
                <h1 class="hero-title">Hero Technology</h1>
                <p class="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <p><a class="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
            </div>
        </div>
    </div>
    <div><a class="left carousel-control" href="#carousel-1" role="button" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">Previous</span></a>
        <a class="right carousel-control" href="#carousel-1" role="button" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">Next</span></a>
    </div>
    <ol class="carousel-indicators">
        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-1" data-slide-to="1"></li>
        <li data-target="#carousel-1" data-slide-to="2"></li>
    </ol>
</div>
          
                 
      
    )
  }
};
export default carrot;