package com.selfimprovementplatform.service;

import org.springframework.stereotype.Service;

@Service
public interface HydrationService {
    int getHydration(int userId);
    void setHydration(int userId, int hydration);
}
