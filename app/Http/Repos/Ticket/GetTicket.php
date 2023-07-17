<?php

namespace App\Http\Repos\Ticket;
use App\Models\Ticket;
use App\Models\User;

class GetTicket
{

    public function GetTickets()
    {
        return Ticket::all();
    }

    public function GetTicket($id)
    {
        return Ticket::with('user')->find($id);
    }

    /**
     * Get all tickets for a user
     * @param int $id
     * @return mixed
     */
    public function GetUserTickets($id = null, int $perPage = 10)
    {
        $id = $id ?? auth()->user()->id;
        return User::find($id)->tickets()->paginate($perPage);
    }
}