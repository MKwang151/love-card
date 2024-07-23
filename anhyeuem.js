const lid = document.getElementById("lid");

lid.addEventListener("mouseover", () => {
  console.log(123);
  const tl = new TimelineMax();
  tl.to(lid, {
    x: -10
  });
  tl.to(
    lid,
    {
      rotation: -10,
      transformOrigin: "20% 100%"
    },
    "-=0.5"
  );
  // tl.fromTo(
  //   "#heart",
  //   { y: -100 },
  //   { y: -200, duration: 1, opacity: 1, visibility: "visible", ease: "elastic" }
  // );
});
