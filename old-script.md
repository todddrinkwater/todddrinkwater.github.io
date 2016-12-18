<!DOCTYPE html>
<html>
  <head>
    <title>Todd Drinkwater | Web Developer</title>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width,height=device-height initial-scale=1"> -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" rel="stylesheet" type="text/css">
    <link href="styles/main.css" rel="stylesheet" type="text/css">
  </head>
  <body>

    <body>

      <div id="wrapper">

        <header>
          <nav class="row">
            <ul class="four columns">
              <li><a href="index.html" title="homepage" id="home-button">todddrinkwater</a></li>
            </ul>
            <ul class="two columns" id="menu-options">
              <li><a href="projects.html" title="projects">projects</a></li>
            </ul>
            <ul class="two columns" id="menu-options">
              <li><a href="blogs.html" title="blogs">blogs</a></li>
              </ul>
            <ul class="two columns" id="menu-options">
              <li><a href="about.html" title="about">about</a></li>
            </ul>
            </ul>
          </nav>
        </header>


        <div class="mobile-only">
          <ul id="mobile-list">
            <li><a href="projects.html" title="Projects">projects</a></li>
            <li><a href="blogs.html" title="Blogs">blogs</a></li>
            <li><a href="about.html" title="About">about</a></li>
          </ul>

          </ul>
        </div>





  <footer class="container">
    <div class="row">
      <ul>
        <li><a href="https://twitter.com/todddrinkwater1" class="twitter-follow-button" data-show-count="false" title="Twitter">Twitter</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></li>
        <li><a href="https://www.facebook.com" title="Facebook">Facebook</a></li>
        <li><a href="https://www.linkedin.com/" title="Linked In">Linked In</a></li>
        <li><a href="https://github.com/" title="GitHub">GitHub</a></li>

      </ul>
    </div>
  </footer>

</div>

  </body>
</html>


/* Mobile Styling */

    @media (max-width: 400px){

      * {
        border: 1px solid red;
      }

      header {
        margin: 0;
        padding: 0;
      }

      nav {
        background: #313131;
        /* position: fixed; */
        font-size: 2rem;
        width: 100%;
        /*display: block;*/
        margin: 0 0 0 0;
        padding: 2% 40% 0 40%;
      }

      #home-button {
        padding: 0;
        margin: 0;
      }



      #menu-options {
        display: none;
      }

      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      body {
        background-color: grey;
        background-repeat:no-repeat;
        background-size: cover;
        background-position:center;
        height: 100%;
      }



      #mobile-list {
        display: inline;
      }

      #mobile-list {
        margin: 5rem;
        text-align: center;
      }



      /* Anchor Styling */

      a {
       color: #f1f1f1;
       text-decoration: none;
      }

      a:hover {
        color: #becffb;
      }

      footer ul li {
        float: center;
        display: inline;
        width:100%;

}
      }
}

/*



  #home-button {
    display: none;
    background: #313131;
    position: fixed;
    flex-wrap: wrap;
    width: 100%;
    display: block;
    color: white;
    margin: 0;
    padding: 0;
  }  */

/*  Nav Bar Styling */

/*
    .nav {
      background: #313131;
      position: fixed;
      flex-wrap: wrap;
      width: 100%;
      display: block;
      color: white;
      margin: 0;
      padding: 0;
    }

    header {
      margin: 0 0 20px 0;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      list-style-type: none;
      display: inline-block;
      color: blue;
      padding-bottom: 0;
      margin-bottom: 0;
      font-size: 2rem;
    }

    #home-button {
      padding: 0 3rem 0 0.5rem;
    }

    .mobile-only {
      color: blue;
    }

    #mobile-list {
      color: blue;
    }

    /* Anchor Styling

    a {
     color: white;
     text-decoration: none;
    }

    a:hover {
      color: yellow;
    }
  }




}

/*
 Larger than a tablet
@media (min-width: 750px){
Nav Bar Styling
  .nav {
    background: #313131;
    position: fixed;
    flex-wrap: wrap;
    width: 100%;
    display: block;
    color: white;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    display:inline-block;
    color: white;
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 2rem;
  }

  #home-button {
    padding: 0 3rem 0 0.5rem;
  }


  /* Anchor Styling

  a {
   color: white;
   text-decoration: none;
  }

  a:hover {
    color: yellow;
  }
}

*/
