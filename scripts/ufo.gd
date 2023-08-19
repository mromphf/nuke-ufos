extends Traveler

signal dead

@export var death: PackedScene

var _hp = 2

func _init():
	_velocity = Vector2(0, 2)


func _process(_delta):
	super(_delta)
	rotate(PI / 180)


func _die():
	var d = death.instantiate()
	d.position = position
	get_parent().add_child(d)
	emit_signal(&"dead", 10)
	queue_free()

func _on_collide(body):
	_hp -= 1

	if body is Player or _hp <= 0:
		_die()

	$Animation.play(&"flash")
	$Hit.play()


func _ready():
	$Sprite.play()
