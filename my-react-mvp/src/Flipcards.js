import React from "react";
import "./flipcards.css";

function Flipcards() {
	return (
		<div className="container">
			<div className="post-wrap">
				{/* <!-- The parent element --> */}
				<div className="post">
					{/* <!-- Child element that flips --> */}
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url(https://1stwebdesigner.com/wp-content/uploads/2020/06/17-cool-pure-css-animations-thumb.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>About Family</h2>
							<h2>Ephesians 6:1</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-except">
							<h2>Ephesians 6:1</h2>
							<p>
								Children,obey your parents because you belong to the Lord, for
								this is the right thing to do.
							</p>
							<br></br>
							<p>
								Efesus 6:1 "Anak-anak, turutlah perintah ibu bapamu dalam Tuhan,
								kerana ini adalah wajar."
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="post-wrap">
				<div className="post">
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url(https://1stwebdesigner.com/wp-content/uploads/2017/12/gifts-designer.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>Patience and Forgiving</h2>
							<h2>Matthew 5:44</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-excerpt">
							<h2>Matthew 5:44</h2>
							<p>
								But I say, love your enemies. Pray for those who persecute you
							</p>
							<br></br>
							<p>
								Matius 5:44 "Tetapi sekarang Aku berkata kepadamu: Kasihilah
								musuhmu dan doakan orang yang menganiayamu."
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="post-wrap">
				<div className="post">
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url('https://1stwebdesigner.com/wp-content/uploads/2020/06/migrate-wordpress-thumb.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>Trusting God in everything you do</h2>
							<h2>Philippians 4:13</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-except">
							<h2>Philippians 4:13</h2>
							<p>
								For I can do everything through Christ, who gives me strength.
							</p>
							<p>
								Filipi 4:13 "Aku dapat melakukan segalanya melalui Kristus yang
								memberiku kekuatan".
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="post-wrap">
				<div className="post">
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url('https://1stwebdesigner.com/wp-content/uploads/2020/06/migrate-wordpress-thumb.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>Worship God faithfully</h2>
							<h2>Galatians 1:5</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-except">
							<h2>Galatians 1:5</h2>
							<p>
							All glory to God forever and ever! Amen.
							</p>
							<p>
								Galatia 1:5 "Bagi-Nyalah kemuliaan selama-lamanya! Amin".
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="post-wrap">
				<div className="post">
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url('https://1stwebdesigner.com/wp-content/uploads/2020/06/migrate-wordpress-thumb.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>Keep praying</h2>
							<h2>1 Thessalonians 5:17</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-except">
							<h2>1 Thessalonians 5:17</h2>
							<p>
							Never stop praying.
							</p>
							<p>
								1 Tesalonika 5:17 "Berdoalah sepanjang masa".
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="post-wrap">
				<div className="post">
					<div className="post-front">
						<div
							className="post-img"
							style={{
								backgroundimage:
									"url('https://1stwebdesigner.com/wp-content/uploads/2020/06/migrate-wordpress-thumb.jpg)",
							}}
						></div>
						<div className="post-info">
							<h2>Rely on God in everything you do</h2>
							<h2>Psalms 55:22</h2>
						</div>
					</div>
					<div className="post-back">
						<div className="post-except">
							<h2>Psalms 55:22</h2>
							<p>
							Give your burdens to the Lord, and he will take care of you. He will not permit the godly to slip and fall.
							</p>
							<p>
								Mazmur 55:22 "Serahkanlah bebanmu kepada Tuhan. Dia akan menolongmu; Dia tidak akan membiarkan orang yang benar dikalahkan".
							</p>
						</div>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Flipcards;
