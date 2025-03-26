import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar bg-light" id="navbar">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="logo" width="100px" height="50px" />
				</Link>
				<button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fa-solid fa-bars"></i>
				</button>
			</div>
			<div className="collapse navbar-collapse bg-primary" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu">
							<ul className="dropdown-fav">
								{store.favorites.length === 0 ?
									<li className="fav">
										<p className="dropdown-item">No Favorites yet :(</p>
									</li> :
									store.favorites.map((favorite, index) => {
										return (
											<li className="dropdown-fav" key={index}>
												<div className="col-9">
													<p className="dropdown-fav">{favorite.name}</p>
												</div>
												<div className="col-3">
													<div>
														<button type="delete" className="btn btn-danger"
															onClick={() => actions.handleFavorite(favorite)} >
															<i class="fa-solid fa-trash-can"></i>
														</button>
													</div>
												</div>
											</li>
										)
									})}
							</ul>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};