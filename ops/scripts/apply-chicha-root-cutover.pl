#!/usr/bin/env perl
use strict;
use warnings;

my $path = shift @ARGV or die "Usage: $0 /path/to/chicha.conf\n";
open my $in, '<', $path or die "Cannot read $path: $!\n";
local $/;
my $config = <$in>;
close $in;

sub replace_once {
    my ($from, $to, $label) = @_;
    my $count = () = $config =~ /\Q$from\E/g;
    die "Expected exactly one $label block, found $count\n" unless $count == 1;
    $config =~ s/\Q$from\E/$to/;
}

my $legacy_anchor = q~    location = /sw.js {
        try_files $uri =404;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header X-Content-Type-Options "nosniff" always;
    }
~;
my $legacy_replacement = q~    # Preserve query strings when sending historical uni-app deep links to
    # the new user-app host. The root path is deliberately excluded.
    if ($legacy_chicha_route) {
        return 302 https://app.chicha.io$request_uri;
    }

    # Serve the one-time cleanup worker from the new website so old PWA
    # registrations stop controlling chicha.io after the migration.
    location = /sw.js {
        proxy_pass http://chicha-website-production:3101;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        expires -1;
    }
~;
replace_once($legacy_anchor, $legacy_replacement, 'service-worker');

replace_once(q~    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        expires -1;
        try_files $uri =404;
    }
~, q~    location = /index.html {
        proxy_pass http://chicha-website-production:3101;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        expires -1;
    }
~, 'index');

replace_once(q~    location / {
        try_files $uri $uri/ /index.html;
    }
~, q~    location / {
        proxy_pass http://chicha-website-production:3101;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
~, 'website fallback');

open my $out, '>', $path or die "Cannot write $path: $!\n";
print {$out} $config;
close $out or die "Cannot close $path: $!\n";
