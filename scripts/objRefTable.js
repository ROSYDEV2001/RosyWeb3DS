const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Behaviors.Car.Acts.SetMaxSpeed,
		C3.Behaviors.Car.Acts.SetAcceleration,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.RotateTowardAngle,
		C3.Behaviors.Car.Acts.Stop,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.Sprite.Acts.SetAngle
	];
};
self.C3_JsPropNameTable = [
	{FondoEnMosaico: 0},
	{Coche: 0},
	{DesplazarHasta: 0},
	{car_01: 0},
	{Teclado_del_juego: 0},
	{car_02: 0},
	{Sólido: 0},
	{muro: 0},
	{barrera_01: 0},
	{barrera_02: 0},
	{Ancla: 0},
	{metas: 0},
	{mao_tars: 0}
];

self.InstanceType = {
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	car_01: class extends self.ISpriteInstance {},
	Teclado_del_juego: class extends self.IInstance {},
	car_02: class extends self.ISpriteInstance {},
	muro: class extends self.ITiledBackgroundInstance {},
	barrera_01: class extends self.ITiledBackgroundInstance {},
	barrera_02: class extends self.ITiledBackgroundInstance {},
	metas: class extends self.ITextInstance {},
	mao_tars: class extends self.ISpriteInstance {}
}