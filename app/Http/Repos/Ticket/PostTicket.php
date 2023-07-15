<?php

namespace App\Http\Repos\Ticket;
use App\Models\Ticket;

class PostTicket
{

    public function StoreTicket($request)
    {
        $ticket = Ticket::create([
            'title' => $request['title'],
            'description' => $request['description'],
            'applicant_id' => $request['applicant_id'] ?? null,
        ]);

        return $ticket->users()->attach(auth()->user()->id);
    }
}