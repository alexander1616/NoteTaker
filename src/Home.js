function Home() {
    return (
      <main>
        <h1>HOME</h1>
        <div >
          <img height="300" width="500" src="http://localhost:3000/images/frontpage.png" alt="Listpic" />
          <div>
            Photo by <a href="AUTHOR_LINK">Julia Martins</a>
          </div>
        </div>
        <a href="/events">
          <button className="btn-primary">Events Page</button>
        </a>
      </main>
    );
  }
  
  export default Home;
  